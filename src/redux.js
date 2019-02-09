// @flow

import { createStore } from "redux";
import reducer, { type TState as TCountState } from "./todoModule";

export type TStore = TCountState;

const store = createStore(reducer);

export default store;
