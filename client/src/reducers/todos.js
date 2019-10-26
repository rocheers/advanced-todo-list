import initialState from '../reducers/initialState';
import { ADD_TODO, TOGGLE_TODO, INPUT_TEXT, LOAD_TODOS_SUCCESS } from '../constants/actionTypes';

const todos = (state = initialState.todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    status: action.status
                }
            ]
        case TOGGLE_TODO:
            return state.map(todo => todo._id === action.id ? {
                ...todo, status: action.status
            } : todo);

        case INPUT_TEXT:
            return;

        case LOAD_TODOS_SUCCESS:
            return action.todos;

        default:
            return state;
    }
}

export default todos;