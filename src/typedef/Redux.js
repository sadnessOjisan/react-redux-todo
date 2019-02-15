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

/**
 * mapStateToProps の返り値の型
 * @typedef {Object} TMapStateToProps
 * @property {String} id task固有の UUID (https://ja.wikipedia.org/wiki/UUID)
 * @property {String} task todo内容
 * @property {Boolean} isDone todoの達成状況
 */

/**
 * mapDipatchToProps の返り値の型
 * @typedef {Object} TMapDispatchToProps
 * @property {void=>void} activateFilter - フィルターをONにするactionをdispatchする。
 * @property {string=>void} addTodo - todoを追加するactionをdispatchする
 * @property {string => void} checkTodo - todoをundone->doneに変更するactionをdispatchする
 * @property {void=>void} inactivateFilter - フィルターをOFFにするactionをdispatchする。
 * @property {string => void} uncheckTodo - todoをdone->undoneに変更するactionをdispatchする
 */
