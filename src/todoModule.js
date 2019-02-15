// action type

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

const addTodo = task => {
  return { type: ADD_TODO, payload: task };
};

const checkTodo = id => {
  return { type: CHECK_TODO, payload: id };
};

const uncheckTodo = id => {
  return { type: UNCHECK_TODO, payload: id };
};

const activateFilter = () => {
  return { type: ACTIVATE_FILTER };
};

const inactivateFilter = () => {
  return { type: INACTIVATE_FILTER };
};

/**
 * countのstateです。
 * reducerから更新されます。
 * @type {Store}
 */
const initialState = {
  todos: [],
  isFilter: false
};

/**
 * reducerはstateを変更する役割を持ちます。古いstateとactionを元に、新しいstateを返します。
 * stateの破壊的変更は禁止されているので、新しいstateオブジェクトを作り直して返しています。
 * @param {Store} state 更新前のstate
 * @param {Action} action 更新内容を伝えるメッセージ
 * @return {Store} 新しいstate
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
 * UUIDを生成します
 * @return {String} UUID
 */
const _genUUID = () => {
  return Math.random() // randomなidを生成しています
    .toString(36)
    .slice(-8);
};

// esdocで仕様書を生成するためにexport. アプリを動かすためならば、この処理は不要(reducerのexportは必要)
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
