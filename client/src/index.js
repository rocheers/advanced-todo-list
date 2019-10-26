import React from 'react';
import ReactDom from 'react-dom';
// import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import TodoApp from './TodoApp';
// import LoginApp from './LoginApp/LoginApp';
import './semantic/dist/semantic.min.css';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDom.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);