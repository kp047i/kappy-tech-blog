---
title: nuxt/contentにvue-scrollactiveの導入
description: nuxt/contentでは簡単に記事の一覧を取得できるため、目次が作りやすいです。この記事ではvue-scrollactiveをnuxt/contentのプロジェクトに導入して目次をデザインする方法を紹介します。
tags: ['Nuxt.js', 'nuxt/content', 'vue-scrollactive']
position: 2
date: 2020-08-19
---

## vue-scrollactiveとは

[vue-scrollactive](https://github.com/eddiemf/vue-scrollactive)はスクロールしている該当の見出しの目次に対して'active'などの指定したクラスを割り当てることができます。よって、当ブログの目次のようにスクロールすることで目次の色を変更することなどができます。

## vue-scrollactiveのインストール

まず、vue-scrollactiveをインストールします。

``` bash
$ yarn add vue-scrollactive
```

## pluginの設定

次に、インストールしたvue-scrollactiveのコンポーネントを利用できるようにプラグインの設定を行います。

``` ts{}[scrollactive.ts]
import Vue from 'vue'
import scrollactive from 'vue-scrollactive'

Vue.use(scrollactive)
```

javascriptでプロジェクトを作成している場合には、上記のプラグインのファイルを作成するだけで大丈夫だと思いますが、typescriptの場合はさらに、型定義ファイルを追加します。

``` ts{}[types/vue-scrollactive.d.ts]
declare module 'vue-scrollactive'
```

一応、上記だけで動きますが、typescriptの書き方として大丈夫かは不明...

## vue-scrollactiveの使い方

pluginの設定をしたことでコンポーネントとしてvue-scrollactiveを呼び出すことができるようになりました。

articleはcontentから取得したオブジェクトです。scrollactiveコンポーネントのactive-classプロパティは指定したクラスをスクロールされている場所のscrollactive-itemクラスが存在する要素に追加します。

下記のコードではactiveクラスを付与したリンクの色を変えることでスクロールしている場所の目次をわかりやすくすることができます。

``` vue{}[components/toc.vue]
<templeate>
  ...
  <scrollactive active-class="active">
    <ul>
      <li
        v-for="link in article.toc"
        :key="link.id"
        :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
      >
        <NuxtLink :to="`#${link.id}`" class="scrollactive-item">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </scrollactive>
  ...
</template>
```

余談ですが、contentのtocにはdepthという見出しの大きさを表すプロパティも存在するのでh2とh3で目次のスタイルを変えることもできます。

## 終わりに

この記事では、vue-scrollactiveをnuxt/contentで使用する方法を紹介しました。紹介したもの以外にもvue-scrollactiveには様々なオプションがあるためぜひいろいろ試してみて下さい。
