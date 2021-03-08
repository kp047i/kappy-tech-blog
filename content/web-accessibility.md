---
title: Webアクセシビリティに関するメモ
description: Webアクセシビリティに関するメモやツールの紹介をするページ
tags: ['Webアクセシビリティ']
position: 6
date: 2021-03-08
---

## Webアクセシビリティとは

- WebアクセシビリティとはWeb上にあるコンテンツに対するアクセスのしやすさ、機能の利用しやすさを指す
- 単に障害がある人や高齢者のためのものではなく、あらゆる環境であらゆる人が問題なく利用できるように補助する
- 海外ではアクセシビリティの対応不足で訴訟されるケースもある

## 考えられうる状況

- スマートフォンやタブレットなど様々なデバイス
- 視覚障害
  - 画面読み上げ
  - キーボード操作
  - 画面の拡大
  - 色の見え方の違い
- 手や腕が使えない
  - マウスが使いづらい
  - キーボード操作
- 音声が聞き取りづらい、聞こえない
  - 電車の中
  - 動画
  - 字幕、書き起こし

## ガイドラインや参照するリンク

- [Web Content Accessibility Guidelines (WCAG) 2.0](https://waic.jp/docs/WCAG20/Overview.html)
  - A, AA, AAAという達成基準がある
  - Aが最低限の対応でAAAは達成することがハイレベルなもの
- [Easy Checks – A First Review of Web Accessibility](https://www.w3.org/WAI/test-evaluate/preliminary/)
- [freeeアクセシビリティー・ガイドライン](https://a11y-guidelines.freee.co.jp/)
- [Webサービスのアクセシビリティについて 考慮すべきポイントを挙げてく](https://zenn.dev/catnose99/scraps/8dd52a640e440ce1e265)

## ツール

- lighthouse
- [axe](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd)
  - オープンソースのアクセシビリティ検証ツール
  - Chromeの拡張機能
- [Markup Validation Service](https://validator.w3.org/)
- [A11yc アクセシビリティ チェック サービス](https://a11yc.com/check/)
- [Micromodal.js](https://micromodal.now.sh/)
  - アクセシビリティに考慮した軽量なモーダルのプラグイン

## WAI-ARIA

WAI-ARIA(Web Accessibility Initiative - Accessible Rich Internet Applications)を利用することで、HTMLだけでは不足している意味を付与することでセマンティックに表現できる。フレームワークなどの関係でdivの要素に意味を持たせたい時などに使う。mainやarticleなどもとからhtmlのタグで表現できるものはそのタグを使う。
