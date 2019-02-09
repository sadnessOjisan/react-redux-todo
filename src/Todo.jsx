// @flow

import * as React from "react";
import { bindActionCreators, type Dispatch } from "redux";
import { connect } from "react-redux";
import { actionCreators } from "./todoModule";
import { type TStore } from "./redux";

type Props = {
  // mapStateToProps
  count: number,
  // mapDispatchToProps
  countUp: void => void,
  countDown: void => void
};

class Todo extends React.Component<Props> {
  render() {
    const { count, countUp, countDown } = this.props;
    return (
      <center>
        <h1>count</h1>
        <button onClick={countUp}>up</button>
        <button onClick={countDown}>down</button>
        <p>{count}</p>
      </center>
    );
  }
}

const mapStateToProps = (state: TStore) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch: Dispatch<*>) => {
  return {
    addTodo: bindActionCreators(actionCreators.addTodo, dispatch),
    countDown: bindActionCreators(actionCreators.countDown, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
