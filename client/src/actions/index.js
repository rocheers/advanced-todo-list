import { ADD_TODO, TOGGLE_TODO, LOAD_TODOS_SUCCESS, CHANGE_VALUE, CREATE_TODO_SUCCESS, TOGGLE_TODO_SUCCESS } from '../constants/actionTypes';
import { COMPLETED, INCOMPLETED } from '../constants/todoConstant';
import axios from 'axios';

// export const addTodo = text => ({
//     type: ADD_TODO,
//     text,
//     status: INCOMPLETED
// });

// export const toggleTodo = (id, status) => ({
//     type: TOGGLE_TODO,
//     id,
//     status: status === INCOMPLETED ? COMPLETED : INCOMPLETED
// });

export const changeValue = val => ({
    type: CHANGE_VALUE,
    val
});

function loadTodosSuccess(todos) {
    return { type: LOAD_TODOS_SUCCESS, todos };
}

export const loadTodos = () => {
    return function (dispatch) {
        return axios.get('/todos').then(todos => {
            dispatch(loadTodosSuccess(todos.data));
        }).catch(error => {
            throw error;
        });
    };
};

function createTodoSuccess(todo) {
    return { type: CREATE_TODO_SUCCESS, todo };
}

export const createTodo = (inputText) => {
    return function (dispatch) {
        return axios.post('/todos', {
            inputText,
            status: INCOMPLETED
        }).then(todo => {
            dispatch(createTodoSuccess(todo.data));
        }).catch(error => {
            throw error;
        });
    };
};

function toggleTodoSuccess(todos) {
    return { type: TOGGLE_TODO_SUCCESS, todos };
}

export const toggleTodo = (id) => {
    return function (dispatch) {
        return axios.put(`/todos/${id}`)
        .then(todos => {
            dispatch(toggleTodoSuccess(todos.data));
        }).catch(error => {
            throw error;
        });
    };
};


