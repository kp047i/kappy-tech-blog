---
title: Array.prototype.reduce()の使いどころやイメージのメモ
description: 先日、とあるインターンに参加しと取り組んだ課題の解答例にArray.prototype.reduce()を使っているものがありました。いまいち、reduceの使い方を理解してなかったので質問してみて、その解答がすごくしっくりきたのでメモとして残します。
tags: ['JavaScript']
---

## Array.prototype.reduce()とは

[MDNのArray.prototype.reduce()のページ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)には下記のように紹介されています。

> reduce() メソッドは、配列の各要素に対して (引数で与えられた) reducer 関数を実行して、単一の結果値にします。

ここでいうreducer関数とはひたすらに状態を更新するための関数とイメージしておくとすっきりするかもしれません。

単一の結果値にするというのがポイントでreduce()が返すのは最後に実行された値だけになります。ちなみに、reduceの語源はre(後ろ)とduce(導く)から来ているらしいです。減らすだけで覚えておくとイメージと少しずれるかもしれません。

reducer関数は第一引数にアキュムレータ―という値、第二引数にループする配列の現在地が渡されます。アキュムレーターは各要素にreducer関数を実行したときに蓄積されたものになります。そのため、reduce()は**「配列の要素を一通り見ながら、その要素や添え字の値を使った反復処理を元に何か結果を得たい」**場合に使い勝手がいいです。

## 使いどころ

### 配列内の値の合計値を出す

私はこの使い方しか記憶していなかったため、reduce()をうまく使いこなせていませんでした。たぶん最も一般的な使い方だと思います。

``` js
const arr = [1, 2, 3, 4]
const result = arr.reduce((total, value) => total + value, 0)

console.log(result) // 10
```

### オブジェクトのプロパティからグループ化する

配列内にあるオブジェクトの特定のプロパティをまとめたいときにも使用することができます。私は、記事の配列からカテゴリーごとにまとめたいときに、以前までは、空のオブジェクトを作成してそこに追加していく方法で実装していたのですが、reduce()を使うことで破壊的変を加えることなく実装することができます。

``` js
const articles = [
  { name: 'foo', category: 'game' },
  { name: 'bar', category: 'sports' },
  { name: 'hoge', category: 'sports' },
  { name: 'fuga', category: 'technology'}
]

const groupedArticleList = articles.reduce((list, article) => {
  if (!list[article.category]) {
    list[article.category] = [article]
  } else {
    list[article.category].push(article)
  }
  return list
}, {})

console.log(groupedArticleList)
/*
{
  game: [ { name: 'foo', category: 'game' } ],
  sports: [
    { name: 'bar', category: 'sports' },
    { name: 'hoge', category: 'sports' }
  ],
  technology: [ { name: 'fuga', category: 'technology' } ]
}
*/
```

## 終わりに

Array.prototype.reduce()のイメージか簡単な使用例を紹介しました。reduce()を使うことでできることが他にもまだあるので今後追加していくかもしれません。インターンに参加したことですごく勉強になりました。
