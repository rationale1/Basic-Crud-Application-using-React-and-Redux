import { combineReducers } from "redux";
import tableReducer from "./TableReducer";

const rooterReducers = combineReducers({ tableReducer });

export default rooterReducers;
