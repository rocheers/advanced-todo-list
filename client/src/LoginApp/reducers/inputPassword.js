import initialState from '../reducers/initialState';

const inputPassword = (state = initialState.inputPassword, action) => {
    switch(action.type) {
        case 'CHANGE_PASSWORD_VALUE':
            return action.val;
        default:
            return state;
    }
};

export default inputPassword;