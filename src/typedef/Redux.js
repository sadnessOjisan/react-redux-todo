/**
 * reduxのstore. アプリ全体のstateを管理する. このアプリケーションではcountをstateとして持つ.
 * @typedef {Object} Store
 * @property {Todo[]} todos todoオブジェクトの配列
 * @property {Boolean} isFilter fliterの状態
 */

/**
 * reduxのaction.
 * @typedef {Object} Action
 * @property {String} type actionの識別子
 * @property {mixed?} payload actionのデータ
 * @example const exampleAction = {type: 'HOGE', payload: 'sample_data'}
 */
