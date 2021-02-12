import React from 'react'
import ReactDOM from 'react-dom'
import App from './App';
import { BrowserRouter } from 'react-router-dom';


import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import allreducers from './reducers';
import thunk from 'redux-thunk';
// index.js

const store = createStore(allreducers,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)