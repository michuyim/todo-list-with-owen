import { combineReducers } from "redux";
import TasksReducer from "./taskReducer";

export default combineReducers({
    data: TasksReducer
});