import {configureStore, applyMiddleware, compose} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducers from "./reducers";

const initialState = {};
const TaskStore = configureStore(
    rootReducers,
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default TaskStore;