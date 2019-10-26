import { ADD_TODO, TOGGLE_TODO, LOAD_TODOS_SUCCESS, CHANGE_VALUE } from '../constants/actionTypes';
import { COMPLETED, INCOMPLETED } from '../constants/todoConstant';
import axios from 'axios';

export const addTodo = text => ({
    type: ADD_TODO,
    text,
    status: INCOMPLETED
});

export const toggleTodo = (id, status) => ({
    type: TOGGLE_TODO,
    id,
    status: status === INCOMPLETED ? COMPLETED : INCOMPLETED
});

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
