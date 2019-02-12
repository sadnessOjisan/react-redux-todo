// @flow

import * as React from "react";
import { bindActionCreators, type Dispatch } from "redux";
import { connect } from "react-redux";
import {
  addTodo,
  checkTodo,
  uncheckTodo,
  activateFilter,
  inactivateFilter
} from "./todoModule";
import { type TStore } from "./redux";
import Todo from "./Todo";
import { type TTodo } from "./typedef/Todo";

type TMapStateToProps = {|
  todos: Array<TTodo>,
  isFilter: boolean
|};

type TMapDispatchToProps = {|
  addTodo: typeof addTodo,
  checkTodo: typeof checkTodo,
  uncheckTodo: typeof uncheckTodo,
  activateFilter: typeof activateFilter,
  inactivateFilter: typeof inactivateFilter
|};

type Props = {|
  ...TMapStateToProps,
  ...TMapDispatchToProps
|};

class TodoView extends React.Component<Props> {
  handleSubmit(e) {
    e.preventDefault();
    const { addTodo } = this.props;
    const task = e.target["task"].value;
    addTodo(task);
  }

  render() {
    const {
      todos,
      checkTodo,
      uncheckTodo,
      isFilter,
      activateFilter,
      inactivateFilter
    } = this.props;
    return (
      <center>
        <h1>TODO</h1>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input name="task" />
          <button type="submit">送信</button>
        </form>
        <button onClick={isFilter ? inactivateFilter : activateFilter}>
          filterは{isFilter ? "on" : "off"}です。
        </button>
        <p>残りタスクは{todos.filter(todo => !todo.isDone).length}個です。</p>
        <p>
          {todos
            .filter(todo => (isFilter ? todo.isDone : true))
            .map(todo => (
              <Todo
                id={todo.id}
                task={todo.task}
                isDone={todo.isDone}
                checkTodo={checkTodo}
                uncheckTodo={uncheckTodo}
              />
            ))}
        </p>
      </center>
    );
  }
}

const mapStateToProps = (state: TStore) => {
  return { todos: state.todos, isFilter: state.isFilter };
};

const mapDispatchToProps = (dispatch: Dispatch<*>): TMapDispatchToProps => {
  return {
    addTodo: task => dispatch(addTodo(task)),
    checkTodo: id => dispatch(checkTodo(id)),
    uncheckTodo: id => dispatch(uncheckTodo(id)),
    activateFilter: () => dispatch(activateFilter()),
    inactivateFilter: () => dispatch(inactivateFilter())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoView);
