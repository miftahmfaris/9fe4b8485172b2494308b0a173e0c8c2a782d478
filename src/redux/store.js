import { createStore } from "redux";
import reducers from "./reducers";
// import logger from "redux-logger";

export default createStore(reducers);
