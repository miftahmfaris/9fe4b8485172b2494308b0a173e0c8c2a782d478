import { combineReducers } from "redux";
import background from "./background";
import cart from "./cart";
import position from "./position";

export default combineReducers({ cart, position, background });
