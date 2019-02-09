import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Counter from "./counter";
import store from "./redux";

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById("root")
);