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

/**
 * ADD_TODO アクションの型
 * @typedef {Object} TAddTodo
 * @property {'ADD_TODO'} type action type
 * @property {String} payload フォームから追加されたタスク内容
 */

/**
 * CHECK_TODO アクションの型
 * @typedef {Object} TCheckTodo
 * @property {'CHECK_TODO'} type action type
 * @property {String} payload taskのid. UUID
 */

/**
 * UNCHECK_TODO アクションの型
 * @typedef {Object} TUncheckTodo
 * @property {'UNCHECK_TODO'} type action type
 * @property {String} payload taskのid. UUID
 */

/**
 * ACTIVATE_FILTER アクションの型
 * @typedef {Object} TActivateFilter
 * @property {'ACTIVATE_FILTER'} type action type
 */

/**
 * INACTIVATE_FILTER アクションの型
 * @typedef {Object} TInactivateFilter
 * @property {'INACTIVATE_FILTER'} type action type
 */
