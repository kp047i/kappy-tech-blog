---
title: Nuxt/Contentでブログの作成
description: Nuxt/Contentを利用してブログを作成した手順の紹介をします。Nuxt/Contentを利用することで手軽にブログやポートフォリオなどの静的サイトを作ることができます。このブログを利用して勉強した内容や知見などを共有できたらなと思います。
tags: ['Nuxt.js', 'Nuxt/Content']
---

## Nuxt/Contentとは

ブログを作成する上で、最初はNuxt+Headless CMSのContentfulを利用して作ろうかと思いましたが、最近公開された記事もgitで管理できる[Nuxt/Content](https://content.nuxtjs.org/ja)を使用することにしました。

Nuxt/ContentはgitベースのHeadless CMSで、content/ディレクトリに記事を書くだけでブログなどの静的サイトを簡単に作ることができます。

## Nuxtのプロジェクト作成

パッケージマネージャーにはyarnを使いました。以前までNuxtのプロジェクト作成には**create-nuxt-app**コマンドを使用していましたが、以下のコマンドを利用することで簡単にTypeScriptやContentの導入をすることができます。

私の環境ではTypeScriptやUIフレームワークにTailwind CSSを採用しました。Nuxt.js moduleのところではContentを選択することで、モジュールの設定を行ってくれるので選択します。

``` bash
$ yarn create nuxt-app <project-name>

create-nuxt-app v3.2.0
✨  Generating Nuxt.js project in test
? Project name: test
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: Tailwind CSS
? Nuxt.js modules: Content
? Linting tools: ESLint, Prettier
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Static (Static/JAMStack hosting)
```

## コンテンツの取得

content/ディレクトリに作成したマークダウンファイルなどのコンテンツを表示するにはscriptタグ内のasyncDataで記事を取得します。

``` vue{}[_slug.vue]
<script>
import Vue from 'vue'
import { Context } from '@nuxt/types'

export default Vue.extend({
  async asyncData({ $content, params }: Context) {
    const article = await $content(params.slug).fetch()
    return {
      article,
    }
  },
}
</script>
```

## コンテンツの表示

取得したコンテンツを表示するには**nuxt-content**タグを利用してdocumentに取得したデータをバインドします。

``` vue{}[_slug.vue]
<template>
  ...
  <nuxt-content :document="article" />
  ...
</template>
```

### マークダウンにスタイルを追加する

マークダウンにスタイルを適用させるには以下のようにします。

```vue{}[_sulg.vue]
<style>
.nuxt-content h2 {
  font-size: 1.6rem;
}
</style>
```

## コードにシンタックスハイライトを追加する

マークダウンのコードブロックにシンタックスハイライトを追加するにはprismJSのライブラリをインストールします。

``` bash
$ yarn add prism-themes
```

テーマを[prism-themes](https://github.com/PrismJS/prism-themes)から選択してnuxt.config.jsに記載します。

``` ts{}[nuxt.config.ts]
content: {
  markdown: {
    prism: {
      theme: 'prism-themes/themes/prism-material-oceanic.css'
    }
  }
}
```

## 終わりに

Nuxt/Contentを利用してブログを作成しました。これからアウトプットをたくさんしていきたい所存。
