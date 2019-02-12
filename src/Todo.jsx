// @flow

import * as React from "react";
import { checkTodo, uncheckTodo } from "./todoModule";

type Props = {
  id: string,
  task: string,
  isDone: boolean,
  checkTodo: typeof checkTodo,
  uncheckTodo: typeof uncheckTodo
};

class Todo extends React.Component<Props> {
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
