import { combineReducers } from "redux";
import background from "./background";
import calendar from "./calendar";
import cart from "./cart";
import position from "./position";

export default combineReducers({ cart, calendar, position, background });
