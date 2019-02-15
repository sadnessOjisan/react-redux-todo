import * as React from "react";
import { checkTodo, uncheckTodo } from "./todoModule";

/**
 * 1todoを表現するコンポーネント。
 * 実際にはこのコンポーネントがtodosの数だけレンダリングされる。
 * @reactProps {String} id - task固有の UUID (https://ja.wikipedia.org/wiki/UUID)
 * @reactProps {String} task - task内容
 * @reactProps {Boolean} isDone - タスクを終えたかどうかのフラグ
 * @reactProps {string => void} checkTodo - checkしたというactionをdispatchする関数
 * @reactProps {string => void} uncheckTodo - checkを外したというactionをdispatchする関数
 */
class Todo extends React.Component {
  /**
   * stateやpropsを元にUIを返す関数.
   * コンポーネントがmountされたとき、propsやstateが更新されたときに自動で呼ばれる。
   * renderのライフサイクルについては [こちら(Understanding React — React 16.3 + Component life-cycle)](https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705)を参照すると良いでしょう。
   * またrenderの仕様は [こちら(React.Component#render)](https://reactjs.org/docs/react-component.html#render)を参照すると良いでしょう。
   * @returns {void}
   */
  render() {
    const { id, task, isDone, checkTodo, uncheckTodo } = this.props;
    return (
      <div key={id}>
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
