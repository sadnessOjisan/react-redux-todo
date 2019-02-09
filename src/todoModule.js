// @flow

import { type Todo } from "./typedef/Todo";

// action type
const ADD_TODO = "ADD_TODO";
const CHECK_TODO = "CHECK_TODO";
const UNCHECK_TODO = "UNCHECK_TODO";
const ACTIVATE_FILTER = "ACTIVATE_FILTER";
const INACTIVATE_FILTER = "INACTIVATE_FILTER";

const actionTypes = {
  ADD_TODO,
  CHECK_TODO,
  UNCHECK_TODO,
  ACTIVATE_FILTER,
  INACTIVATE_FILTER
};

// action cretor

type TAddTodoAction = { type: typeof ADD_TODO, payload: Todo };
type TCheckTodoAction = { type: typeof CHECK_TODO, payload: string };
type TUncheckTodoAction = { type: typeof UNCHECK_TODO, payload: string };
type TActivateFilterAction = { type: typeof ACTIVATE_FILTER };
type TInactivateFilterAction = { type: typeof INACTIVATE_FILTER };

type TAction =
  | TAddTodoAction
  | TCheckTodoAction
  | TUncheckTodoAction
  | TActivateFilterAction
  | TInactivateFilterAction;

const addTodo = (todo: Todo): TAddTodoAction => {
  return { type: ADD_TODO, payload: todo };
};

const checkTodo = (id: string): TCheckTodoAction => {
  return { type: CHECK_TODO, payload: id };
};

const uncheckTodo = (id: string): TUncheckTodoAction => {
  return { type: UNCHECK_TODO, payload: id };
};

const activateFilter = (): TActivateFilterAction => {
  return { type: ACTIVATE_FILTER };
};

const inactivateFilter = (): TInactivateFilterAction => {
  return { type: INACTIVATE_FILTER };
};

export const actionCreators = {
  addTodo,
  checkTodo,
  uncheckTodo,
  activateFilter,
  inactivateFilter
};

// state
export type TState = {|
  +todos: Array<Todo>,
  +isFilter: boolean
|};

const initialState = {
  todos: [],
  isFilter: false
};

// reducer
const reducer = (state: TState = initialState, action: TAction): TState => {
  let checkedId: string, checkedTodos: Todo[];
  switch (action.type) {
    case ADD_TODO:
      const addedTodo = action.payload;
      return { ...state, todos: [...state.todos, addedTodo] };
    case CHECK_TODO:
      checkedId = action.payload;
      checkedTodos = state.todos.map(
        (todo: Todo): Todo =>
          todo.id === checkedId ? { ...todo, isDone: true } : todo
      );
      return { ...state, todos: checkedTodos };
    case UNCHECK_TODO:
      checkedId = action.payload;
      checkedTodos = state.todos.map(
        (todo: Todo): Todo =>
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

export default reducer;
