/**
 * reduxのstoreです。アプリ全体のstateを管理します。
 * このアプリケーションではcountをstateとして持ちます。
 * @typedef {Object} TStore
 * @property {TTodo[]} todos todoオブジェクトの配列
 * @property {Boolean} isFilter fliterの状態
 */

/**
 * reducerが受け取るActionの型です。
 * もっと正確に言うならば、
 * TAddTodo, TCheckTodo, TUncheckTodo, TActivateFilter, TInactivateFilter
 * の[Union Types](https://flow.org/en/docs/types/unions/)です。
 * @typedef {Object} TAction
 * @property {String} type actionの識別子
 * @property {mixed?} payload actionのデータ
 * @example const addTodoAction = {type: 'ADD_TODO', payload: 'コーヒーを買う'}
 * @example const checkTodoAction = {type: 'CHECK_TODO', payload: 'fu23gvghhh42'}
 * @example const uncheckTodoAction = {type: 'UNCHECK_TODO', payload: 'fu23gvghhh42'}
 * @example const activateFilterAction = {type: 'ACTIVATE_FILTER'}
 * @example const inactivateFilterAction = {type: 'INACTIVATE_FILTER'}
 */

/**
 * ADD_TODO アクションの型です。
 * @typedef {Object} TAddTodo
 * @property {'ADD_TODO'} type action type
 * @property {String} payload フォームから追加されたタスク内容
 */

/**
 * CHECK_TODO アクションの型です。
 * @typedef {Object} TCheckTodo
 * @property {'CHECK_TODO'} type action type
 * @property {String} payload taskのid. UUID
 */

/**
 * UNCHECK_TODO アクションの型です。
 * @typedef {Object} TUncheckTodo
 * @property {'UNCHECK_TODO'} type action type
 * @property {String} payload taskのid. UUID
 */

/**
 * ACTIVATE_FILTER アクションの型です。
 * @typedef {Object} TActivateFilter
 * @property {'ACTIVATE_FILTER'} type action type
 */

/**
 * INACTIVATE_FILTER アクションの型です。
 * @typedef {Object} TInactivateFilter
 * @property {'INACTIVATE_FILTER'} type action type
 */

/**
 * mapStateToProps 関数の返り値の型です。
 * @typedef {Object} TMapStateToProps
 * @property {String} id task固有の UUID (https://ja.wikipedia.org/wiki/UUID)
 * @property {String} task todo内容
 * @property {Boolean} isDone todoの達成状況
 */

/**
 * mapDipatchToProps 関数の返り値の型です。
 * @typedef {Object} TMapDispatchToProps
 * @property {void=>void} activateFilter - フィルターをONにするactionをdispatchする。
 * @property {string=>void} addTodo - todoを追加するactionをdispatchする
 * @property {string => void} checkTodo - todoをundone->doneに変更するactionをdispatchする
 * @property {void=>void} inactivateFilter - フィルターをOFFにするactionをdispatchする。
 * @property {string => void} uncheckTodo - todoをdone->undoneに変更するactionをdispatchする
 */
