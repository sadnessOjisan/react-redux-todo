// @flow

import { createStore } from "redux";
import reducer from "./todoModule";

const store = createStore(reducer);

export default store;
