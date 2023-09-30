import { createStore } from "redux";
import reducer from "./dark-mode/reducer/reducer";

const store = createStore(reducer);

export default store;
