// action type
const ADD_TODO = "ADD_TODO";
const CHECK_TODO = "CHECK_TODO";
const UNCHECK_TODO = "UNCHECK_TODO";
const ACTIVATE_FILTER = "ACTIVATE_FILTER";
const INACTIVATE_FILTER = "INACTIVATE_FILTER";

export const addTodo = task => {
  return { type: ADD_TODO, payload: task };
};

export const checkTodo = id => {
  return { type: CHECK_TODO, payload: id };
};

export const uncheckTodo = id => {
  return { type: UNCHECK_TODO, payload: id };
};

export const activateFilter = () => {
  return { type: ACTIVATE_FILTER };
};

export const inactivateFilter = () => {
  return { type: INACTIVATE_FILTER };
};

// state

const initialState = {
  todos: [],
  isFilter: false
};

// reducer
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

const _genUUID = () => {
  return Math.random() // randomなidを生成しています
    .toString(36)
    .slice(-8);
};

export default reducer;
