import * as React from "react";
import { checkTodo, uncheckTodo } from "./todoModule";

class Todo extends React.Component {
  render() {
    const { id, task, isDone, checkTodo, uncheckTodo } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          checked={isDone}
          onChange={isDone ? () => uncheckTodo(id) : () => checkTodo(id)}
        />
        <span>{task}</span>
      </div>
    );
  }
}

export default Todo;
