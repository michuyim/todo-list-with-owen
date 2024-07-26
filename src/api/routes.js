// GET All Tasks
export const getTasks = () => async dispatch => {
    try {
        const res = await fetch('/api/tasks');
        const data = await res.json();
        dispatch({
            type: "FETCH_ALL",
            data: data
        });
    } catch (error) {
        console.error('Error fetching tasks:', error);
    }
}

// Add To Task List
export const addTask = (newTask) => async dispatch => {
    const newTaskJson = JSON.stringify(newTask);
    try {
        const res = await fetch('/api/new-task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newTaskJson
        });
        const data = await res.json();
        dispatch({
            type: "NEW_TASK",
            data: data
        });
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

// Update Task
export const updateTask = (task) => async dispatch => {
    const newTaskJson = JSON.stringify(task);
    const id = task._id;
    try {
        const res = await fetch(`/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: newTaskJson
        });
        const data = await res.json();
        dispatch({
            type: "UPDATE_TASK",
            data: data
        });
    } catch (error) {
        console.error('Error updating task:', error);
    }
}

// Mark Task Done 
export const markComplete = (id) => async dispatch => {
    try {
        const res = await fetch(`/api/tasks/${id}/done`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        dispatch({
            type: "MARK_DONE",
            data: data
        });
    } catch (error) {
        console.error('Error marking task complete:', error);
    }
}

// Delete Task 
export const deleteTask = (id) => async dispatch => {
    try {
        const res = await fetch(`/api/tasks/${id}/del`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            dispatch({
                type: "DELETE_TASK",
                data: id
            });
        } else {
            console.error('Error deleting task:', res.statusText);
        }
    } catch (error) {
        console.error('Error deleting task:', error);
    }
}