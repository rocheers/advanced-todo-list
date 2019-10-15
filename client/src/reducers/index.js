import { combineReducers } from 'redux';
import todos from './todos';
import inputText from './input';

const rootReducer = combineReducers({
    todos,
    inputText
})

export default rootReducer;