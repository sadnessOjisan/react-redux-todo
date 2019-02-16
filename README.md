# react-redux-todo

| Contents                                            | URL                                                           | 備考                                                     |
| --------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------------------- |
| 最新のコード                                        | https://github.com/sadnessOjisan/react-redux-todo             | -                                                        |
| [Flow](https://flow.org/en/) で型がつけられたコード | https://github.com/sadnessOjisan/react-redux-todo/tree/v1.1.0 | commit hash は`a828751a5e4a91f575c324c060ec7798fd373e45` |
| app                                                 | https://serene-knuth-943719.netlify.com/                      | -                                                        |
| esdoc                                               | https://reverent-curie-b7e403.netlify.com                     | -                                                        |
| nocomment                                           | https://github.com/sadnessOjisan/react-redux-todo/tree/v3.0.1 | コメントが一切ないです。                                 |

## 概要

[react-todo](https://github.com/sadnessOjisan/todo_react)を react-redux で作り直したものです。todo の作成、チェック、フィルターができます。

## 使い方

起動

```
$ npm install

$ npm run build

$ open ./dist/index.html

```

もしくは、

```
$ npm run start
```

ローカルでドキュメントを読みたい

```
$ npm run docgen

$ open ./.esdoc/index.html
```

## なぜ Flow がサンプルコードに入っているか

react-redux では様々な関数が登場したり、redux に読ませるための関数を自作する場面が多く出て来ます。
どのように呼ばれ、何が渡され、何が返されるのかということを読めれば、コードを追いかけられるはずなので、型を入れました。TS じゃないのは、学習コストを考慮してのことです。

Flow の型を読みたい場合は、

```
$ git reset --hard a828751a5e4a91f575c324c060ec7798fd373e45
```

もしくは、 v1.1.0 のタグをみてください。(https://github.com/sadnessOjisan/react-redux-todo/tree/v1.1.0)
