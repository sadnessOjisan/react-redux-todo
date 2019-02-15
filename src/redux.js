import { createStore } from "redux";
import reducer from "./todoModule";

/**
 * reduxのstoreです。`createStore()`にreducerを渡すことで生成できます。
 * store.dispatch(action)でactionをdispatchできます。
 * しかし、ここではaction creatorからdispatchするのでこの方式は取りません。
 * @type {Store}
 */
const store = createStore(reducer);

export default store;
