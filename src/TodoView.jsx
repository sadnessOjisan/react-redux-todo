// @flow

import * as React from "react";
import { bindActionCreators, type Dispatch } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "./todoModule";
import { type TStore } from "./redux";
import Todo from "./Todo";
import { type TTodo } from "./typedef/Todo";

type Props = {
  // mapStateToProps
  todos: Array<TTodo>,
  isFilter: boolean,
  // mapDispatchToProps
  addTodo: typeof actionCreators.addTodo,
  checkTodo: typeof actionCreators.checkTodo,
  uncheckTodo: typeof actionCreators.uncheckTodo,
  activateFilter: typeof actionCreators.activateFilter,
  inactivateFilter: typeof actionCreators.inactivateFilter
};

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

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    addTodo: bindActionCreators(actionCreators.addTodo, dispatch),
    checkTodo: bindActionCreators(actionCreators.checkTodo, dispatch),
    uncheckTodo: bindActionCreators(actionCreators.uncheckTodo, dispatch),
    activateFilter: bindActionCreators(actionCreators.activateFilter, dispatch),
    inactivateFilter: bindActionCreators(
      actionCreators.inactivateFilter,
      dispatch
    )
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoView);
