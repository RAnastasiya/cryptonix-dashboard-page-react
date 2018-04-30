import { combineReducers } from "redux";
import links from "./menu-links";
import currencies from "./currencies-item";
import news from "./news";
import transactions from "./transactions";

export default combineReducers({ links, currencies, news, transactions });

