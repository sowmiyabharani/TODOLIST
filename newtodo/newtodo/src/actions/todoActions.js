
export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const deleteTodo = (todo) => {
    return {
        type: 'DELETE_TODO',
        payload: todo
    }
}

export const toggleStatus = (todo) => {
    return {
        type: 'TOGGLE_STATUS',
        payload: todo
    }
}


export const toggleView = (view) => {
    return {
        type: 'TOGGLE_VIEW',
        payload: view
    }
}