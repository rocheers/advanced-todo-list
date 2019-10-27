import initialState from '../reducers/initialState';

const inputText = (state = initialState.inputText, action) => {
    switch(action.type) {
        case 'CHANGE_VALUE':
            return action.val;
        default:
            return state;
    }
};

export default inputText;