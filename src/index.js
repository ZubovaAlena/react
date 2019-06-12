import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import App from './App';

function reduser (state=0, action) {

    switch (action.type) {
        case 'INCREMENT':
            return state + action.value;

        case 'DECREMENT':
            return state - action.value;

        default:
            return state;
    }
}
function main() {
    window.removeEventListener('load', main, false);
    const store = createStore(reduser, applyMiddleware(logger), );

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
}

window.addEventListener('load', main, false);