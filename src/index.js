import React from 'react';
import ReactDom from 'react-dom';
// import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import TodoApp from './TodoApp';
import './semantic/dist/semantic.min.css';

const store = createStore(rootReducer);

ReactDom.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);