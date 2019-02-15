# react-redux-todo

| Contents | URL                                       |
| -------- | ----------------------------------------- |
| app      | https://serene-knuth-943719.netlify.com/  |
| esdoc    | https://reverent-curie-b7e403.netlify.com |

## 概要

[react-todo](https://github.com/sadnessOjisan/todo_react)を react-redux で作り直したもの。todo の作成、チェック、フィルターができる。

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

## 課題 level

lv1: todo 作成

lv2: done のチェック

lv3: フィルターの作成

lv4 todo の削除

## なぜ Flow がサンプルコードに入っているか

react-redux では様々な関数が登場したり、redux に読ませるための関数を自作する場面が多く出て来ます。
どのように呼ばれ、何が渡され、何が返されるのかということを読めれば、コードを追いかけられるはずなので、型を入れました。TS じゃないのは、学習コストを考慮してのことです。
