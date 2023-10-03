import { createStore } from "redux";
import reducer from "./dark-mode/reducer/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(reducer, composeWithDevTools());

export default store;
