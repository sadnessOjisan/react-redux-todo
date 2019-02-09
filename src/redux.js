// @flow

import { createStore } from "redux";
import reducer from "./countModule";
import { type TState as TCountState } from "./countModule";

export type TStore = TCountState;

const store = createStore(reducer);

export default store;
