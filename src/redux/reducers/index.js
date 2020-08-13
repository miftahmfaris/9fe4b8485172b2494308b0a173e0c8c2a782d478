import { combineReducers } from "redux";
import cart from "./cart";
import position from "./position";

export default combineReducers({ cart, position });
