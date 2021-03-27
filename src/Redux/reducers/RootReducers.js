import { combineReducers } from "redux";
import tableReducer from "./TableReducer";

const rooterReducers = combineReducers({ tableData: tableReducer });

export default rooterReducers;
