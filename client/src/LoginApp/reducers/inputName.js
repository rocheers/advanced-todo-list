import initialState from '../reducers/initialState';

const inputName = (state = initialState.inputName, action) => {
    switch(action.type) {
        case 'CHANGE_NAME_VALUE':
            return action.val;
        default:
            return state;
    }
};

export default inputName;