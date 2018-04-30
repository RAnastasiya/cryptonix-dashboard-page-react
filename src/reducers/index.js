import { combineReducers } from "redux";
import links from "./menu-links";
import currencies from "./currencies-item";
import news from "./news";

export default combineReducers({ links, currencies, news });

