import { combineReducers } from 'redux';
import inputName from './inputName';
import inputPassword from './inputPassword';

const rootReducer = combineReducers({
    inputName,
    inputPassword
})

export default rootReducer;