---
title: node.jsとFirebaseで作るLINE BOT
description: FirebaseでLINE BOTを作る方法を紹介します。Cloud Functionsを使うことで簡単にLINE BOTを作ることができます。Functionsを利用するには料金プランを従量課金制にアップグレードする必要があるのでご注意ください。
tags: ['JavaScript', 'TypeScript', 'Firebase', 'LINE BOT']
position: 5
date: 2021-01-28
---

## LINE BOTの作成

まずは、[LINE developers](https://developers.line.biz/ja/)にログインします。

### プロバイダーの作成

ログインしたら、作成ボタンをクリックし、プロバイダー名を入力しててプロバイダーの作成を行います。

![プロバイダーの作成](/img/firebase-linebot/provider.png)

### チャンネルの作成

Messaging APIの部分をクリックして、必要な項目を入力していきます。

![チャンネルの作成](/img/firebase-linebot/channel.png)

入力が完了したら、利用規約を確認し、チェックボタンを押して利用規約に同意します。

最後に作成ボタンをクリックします。

### チャンネルシークレットとチャンネルアクセストークンの取得

作成したチャンネルのチャンネル基本設定タブのチェンネルシークレットの項目の文字列をコピーしてメモしておきます。

![チャンネルシークレット画面](/img/firebase-linebot/channel-secret.png)

次に、Messaging API設定のタブの一番下の、チャンネルアクセストークンの発行ボタンをクリックし、発行されたチャンネルアクセストークンをコピーして、同様にメモしておきます。

また、Messaging API設定のタブのQRコードからLINEの友達登録をしておきましょう。

## Firebaseでアプリケーションの作成

[Firebaseコンソール](https://console.firebase.google.com/u/0/?hl=ja)にログインしてプロジェクトの作成をクリックします。

プロジェクトの名前を設定し、プロジェクトを作成します。アナリティクスの設定は入れても入れなくても構いません。

![Firebaseのプロジェクトの名前の設定](/img/firebase-linebot/project-name.png)

次に、コンソールからFunctionsのタブに移動します。Functionsを利用するには料金プランを従量課金制にアップグレードする必要があります。

### Firebaseのインストール

まず、firebaseコマンドラインツールをインストールします。

``` sh
$ npm install -g firebase-tools
```

次にインストールしたコマンドラインツールでプロジェクトを作成します。

``` sh
$ firebase init
```

すると、どの機能を使うかを尋ねられますので、Functionsを選択します。次に、Use an existing projectを選択し、先ほど作成したfirebaseのプロジェクト名を選択しましょう。言語やlinterの設定を行えばインストールが開始されます。

インストールが完了するとfunctionsというディレクトリができますのでそのディレクトリに移動して開発を進めていきます。

### Functionsの開発

srcディレクトリのindex.tsまたはindex.jsを編集してデプロイすることでLINE BOTを作成することができます。コードを編集する前に、環境変数の設定を行います。下記のコードの<チャンネルアクセストークン>と<チャンネルアクセスシークレット>を先ほどコピーしたものに置き換えて実行します。さらに、node用のsdkをインストールします。

``` sh
$ firebase functions:config:set line.channel_access_token="<チャンネルアクセストークン>" line.channel_secret="<チャンネルシークレット>"
$ npm install @line/bot-sdk
```

今回は、例としてLINEで受け取ったメッセージをオウム返しするコードをデプロイしてみます。

``` typescript{src/index.ts}
import * as functions from "firebase-functions";
import * as line from "@line/bot-sdk";

const config = {
  channelAccessToken: functions.config().line.channel_access_token,
  channelSecret: functions.config().line.channel_secret,
};
const client = new line.Client(config);

export const lineWebhook = functions
    .region("asia-northeast1")
    .https.onRequest(async (request, response) => {
      const signature = request.get("x-line-signature");

      if (!signature || !line.validateSignature(
          request.rawBody, config.channelSecret, signature
      )) {
        throw new
        line.SignatureValidationFailed(
            "signature validation failed",
            signature
        );
      }

      Promise.all(request.body.events.map(lineEventHandler))
          .then((result) => response.json(result))
          .catch((error) => console.error(error));
    });

const lineEventHandler = (event: line.WebhookEvent) => {
  if (event.type !== "message") {
    console.log("event type is not message");
    return Promise.resolve(null);
  }
  try {
    if (event.message.type === "text") {
      // reply echo message
      const message: line.TextMessage = {
        type: "text", text: event.message.text,
      };
      return client.replyMessage(event.replyToken, message);
    } else {
      return Promise.resolve(null);
    }
  } catch (error) {
    console.error(JSON.stringify(error));
    return Promise.resolve(null);
  }
};

```

コードの編集が完了したらデプロイします。

``` sh
$ firebase deploy --only functions:lineWebhook
```

デプロイが403コードでうまくいかない場合は、一度ログアウトしてみてください。

``` sh
$ firebase logout
$ firebase login
```

### Webhook URLの登録

デプロイが完了したら、Cloud FunctionsのURLをBOTのWebhookに登録します。Cloud Functionのページを開いてダッシュボードからURLをコピーします。

![ダッシュボード画面でURLのコピー](/img/firebase-linebot/dashboard.png)

LINE developersのMessaging API設定を再び開いて、Webhook URLの部分にコピーしたURLを貼ります。検証ボタンを押して、きちんとFunctionsから応答が来ているか確認することができます。

![Webhook URLの登録](/img/firebase-linebot/webhook.png)

## 確認

LINEを開いて先ほど登録した友達のところでメッセージを入力して同じようなメッセージが帰ってきたら成功です。