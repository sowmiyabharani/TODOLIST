export const reducer = (state = {todos: [], view: ''}, action) => {
    switch(action.type) {

        
        case 'ADD_TODO': {
            const newTodo = {id: state.todos.length + 1, task: action.payload, completed: false};
            return {
                todos: [...state.todos, newTodo],
                view: state.view
            };
        }

        
        case 'DELETE_TODO': {
            const newTodos = state.todos.filter(todo => todo.id !== action.payload.id).map((todo, index) => {
                todo.id = index + 1;
                return todo;
            })
            return {
                todos: newTodos,
                view: state.view
            };
        }

    
        case 'TOGGLE_STATUS': {
            return {
                todos: [...state.todos.map(todo => {
                    return todo.id === action.payload.id ? {
                        id: todo.id,
                        task: todo.task,
                        completed: !todo.completed
                    } : todo;
                })],
                view: state.view
            };
        }

        
        case 'TOGGLE_VIEW': {
            return {
                todos: state.todos,
                view: action.payload
            };
        }

        default: return state;
    }
}