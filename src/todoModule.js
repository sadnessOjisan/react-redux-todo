/**
 * addTodo 用のaction識別子(type)
 */
const ADD_TODO = "ADD_TODO";

/**
 * checkTodo 用のaction識別子(type)
 */
const CHECK_TODO = "CHECK_TODO";

/**
 * uncheckTodo 用のaction識別子(type)
 */
const UNCHECK_TODO = "UNCHECK_TODO";

/**
 * activateFilter 用のaction識別子(type)
 */
const ACTIVATE_FILTER = "ACTIVATE_FILTER";

/**
 * inactivateFilter 用のaction識別子(type)
 */
const INACTIVATE_FILTER = "INACTIVATE_FILTER";

/**
 * ADD_TODO アクションを生成するための、[action creator](https://redux.js.org/basics/actions#action-creators)です。
 * @param {String} task タスクの内容 ex) コーヒーを買う
 * @returns {TAddTodo} ADD_TODO 用のaction
 * @example {type: 'ADD_TODO', payload: '柔軟剤を買う'}
 */
const addTodo = task => {
  return { type: ADD_TODO, payload: task };
};

/**
 * CHECK_TODO アクションを生成するための、[action creator](https://redux.js.org/basics/actions#action-creators)です。。
 * taskにチェックを入れたことをreducerに伝える時に利用します。
 * @param {String} id UUID
 * @returns {TCheckTodo} CHECK_TODO 用のaction
 * @example {type: 'CHECK_TODO', payload: '9f0tgh340'}
 */
const checkTodo = id => {
  return { type: CHECK_TODO, payload: id };
};

/**
 * UNCHECK_TODO アクションを生成するための、[action creator](https://redux.js.org/basics/actions#action-creators)です。。
 * taskにチェックを入れたことをreducerに伝える時に利用します。
 * @param {String} id UUID
 * @returns {TCheckTodo} UNCHECK_TODO 用のaction
 * @example {type: 'UNCHECK_TODO', payload: '9f0tgh340'}
 */
const uncheckTodo = id => {
  return { type: UNCHECK_TODO, payload: id };
};

/**
 * ACTIVATE_FILTER アクションを生成するための、[action creator](https://redux.js.org/basics/actions#action-creators)です。。
 * isDone filterをonにしたことをreducerに伝える時に利用します。
 * @returns {TActivateFilter} ACTIVATE_FILTER 用のaction
 * @example {type: 'ACTIVATE_FILTER'}
 */
const activateFilter = () => {
  return { type: ACTIVATE_FILTER };
};

/**
 * INACTIVATE_FILTER アクションを生成するための、[action creator](https://redux.js.org/basics/actions#action-creators)です。。
 * isDone filterをoffにしたことをreducerに伝える時に利用します。
 * @returns {TInactivateFilter} UNCHECK_TODO 用のaction
 * @example {type: 'INACTIVATE_FILTER'}
 */
const inactivateFilter = () => {
  return { type: INACTIVATE_FILTER };
};

/**
 * todo modlue の初期stateです。
 * このアプリはこのstateのみをstoreに持つので、stateの型はTStoreです。
 * @type {TStore}
 */
const initialState = {
  todos: [],
  isFilter: false
};

/**
 * reducerはstateを変更する役割を持ちます。古いstateとactionを元に、新しいstateを返します。
 * stateの破壊的変更は禁止されているので、新しいstateオブジェクトを作り直して返しています。
 * スプレッド演算子を使うと、新しいオブジェクトを簡単に作れるので、採用しています。
 *
 * (例)
 * ```
 * const sample = {a: 1, b: 2, c: 3}
 * const updateSample = {...sample, c:4}
 * // updateSample -> {a: 1, b: 2, c:4}
 * // これは、spread演算子の特性上、{a: 1, b: 2, c: 3, c:4}となるがオブジェクトの同一キーは上書きされるためである。
 * ```
 *
 * またdefaultのcase節ではinitialStateを返さないと、store生成時にundefinedがreturnされるため注意が必要です。
 * 参考: [Redux入門 3日目 Reduxの基本・Reducers(公式ドキュメント和訳)](https://qiita.com/kiita312/items/7fdce94912d6d9c801f8)
 * @param {TStore} state 更新前のstate
 * @param {TAction} action 更新内容を伝えるメッセージ
 * @return {TStore} 新しいstate
 * @example {todos:[{id:'08ryu03f',task:'コーヒー買う', isDone: false},{id:'23rh08f',task:'本を買う', isDone: true}],isFilter:true}
 */
const reducer = (state = initialState, action) => {
  let checkedId, checkedTodos;
  switch (action.type) {
    case ADD_TODO:
      const task = action.payload;
      const newTodo = {
        id: _genUUID(),
        task: task,
        isDone: false
      };
      return { ...state, todos: [...state.todos, newTodo] };
    case CHECK_TODO:
      checkedId = action.payload;
      checkedTodos = state.todos.map(todo =>
        todo.id === checkedId ? { ...todo, isDone: true } : todo
      );
      return { ...state, todos: checkedTodos };
    case UNCHECK_TODO:
      checkedId = action.payload;
      checkedTodos = state.todos.map(todo =>
        todo.id === checkedId ? { ...todo, isDone: false } : todo
      );
      return { ...state, todos: checkedTodos };
    case ACTIVATE_FILTER:
      return { ...state, isFilter: true };
    case INACTIVATE_FILTER:
      return { ...state, isFilter: false };
    default:
      return initialState;
  }
};

/**
 * UUIDを生成します。
 * @return {String} UUIDのようなランダムな文字列
 * @example '2ktzm7mh'
 */
const _genUUID = () => {
  return Math.random() // randomなidを生成しています
    .toString(36)
    .slice(-8);
};

// esdocで仕様書を生成するためにexport.
// アプリを動かすためならば、この処理は不要(reducerのexportは必要)
export {
  ADD_TODO,
  CHECK_TODO,
  UNCHECK_TODO,
  ACTIVATE_FILTER,
  INACTIVATE_FILTER,
  addTodo,
  checkTodo,
  uncheckTodo,
  activateFilter,
  inactivateFilter,
  initialState,
  _genUUID
};
export default reducer;
