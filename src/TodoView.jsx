import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  addTodo,
  checkTodo,
  uncheckTodo,
  activateFilter,
  inactivateFilter
} from "./todoModule";
import Todo from "./Todo";

/**
 * todoアプリ全体のコンポーネント
 * @reactProps {void=>void} activateFilter - フィルターをONにするactionをdispatchする。
 * @reactProps {string=>void} addTodo - todoを追加するactionをdispatchする
 * @reactProps {string => void} checkTodo - todoをundone->doneに変更するactionをdispatchする
 * @reactProps {void=>void} inactivateFilter - フィルターをOFFにするactionをdispatchする。
 * @reactProps {TTodo[]} todos - todo一覧
 * @reactProps {string => void} uncheckTodo - todoをdone->undoneに変更するactionをdispatchする
 * @reactProps {Boolean} isFilter - filteを提供しているかのフラグ
 */
class TodoView extends React.Component {
  /**
   * 送信ボタンを押された時に発火する。
   * task内容を元にaddTodo actionをdispatchする。
   * @param {event} e eventオブジェクト
   */
  handleSubmit(e) {
    e.preventDefault();
    const { addTodo } = this.props;
    const task = e.target["task"].value;
    addTodo(task);
  }

  /**
   * stateやpropsを元にUIを返す関数.
   * コンポーネントがmountされたとき、propsやstateが更新されたときに自動で呼ばれる。
   * renderのライフサイクルについては [こちら(Understanding React — React 16.3 + Component life-cycle)](https://medium.com/@baphemot/understanding-react-react-16-3-component-life-cycle-23129bc7a705)を参照すると良いでしょう。
   * またrenderの仕様は [こちら(React.Component#render)](https://reactjs.org/docs/react-component.html#render)を参照すると良いでしょう。
   * @returns {void}
   */
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
            .filter(todo => (isFilter ? !todo.isDone : true))
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

/**
 * mapStateToProps の役割は、storeのどのプロパティをコンポーネントで使うかを設定することです。
 * ここでは、todos の state と todos コンポーネントを紐づける役割を持たせるように定義しました。
 * @param {TStore} state todosコンポーネントに伝えたいstateを宣言する
 * @returns {TMapStateToProps} どのpropsにアクセスするかの設定を描いたファイル
 */
const mapStateToProps = state => {
  return { todos: state.todos, isFilter: state.isFilter };
};

/**
 * mapDispatchToProps の役割は、どのアクションをコンポーネントからdispatchできるようにするかを設定することです。
 * ここでは、todo情報を保持する store にアクションをdispatchする役割を持ちます。
 * @param {Dispatch} dispatch dispatcher
 * @returns {TMapDispatchToProps} dispathcerを持つオブジェクト
 */
const mapDispatchToProps = dispatch => {
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

export { TodoView, mapStateToProps, mapDispatchToProps };
