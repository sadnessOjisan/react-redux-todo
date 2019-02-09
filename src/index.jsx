import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import TodoView from "./TodoView";
import store from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <TodoView />
  </Provider>,
  document.getElementById("root")
);
