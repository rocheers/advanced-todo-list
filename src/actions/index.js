let nextTodoId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const changeValue = val => {
    return {
        type: 'CHANGE_VALUE',
        val
    };
};