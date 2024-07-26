const initialState = {
    taskStore: [],
};

const TasksReducer = ( state=initialState, action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return({
                ...state, 
                taskStore: action.data
            });
        case "NEW_TASK": 
            return({
                ...state,
                taskStore: [
                    action.data,
                    ...state.taskStore
                ]
            });
        case "UPDATE_TASK":
            return({
                ...state,
                taskStore: state.taskStore.map( task => task._id === action.data._id ? task = action.data : task ) 
            });
        case "MARK_DONE":
            return({
                ...state,
                taskStore: state.taskStore.map( task => task._id === action.data._id ? task = action.data : task )
            });
        case "DELETE_TASK":
            return({
                ...state,
                taskStore: state.taskStore.filter( task => task._id !== action.data )
            });
        default: 
            return state;
    }
}

export default TasksReducer;