'use strict'

// React
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';


import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

// STEP 1 define the Reducer
import reducers from './reducers';

// IMPORT ACTIONS
import { addToCart } from './actions/cartActions';
import { postBooks, deleteBooks, updateBooks } from './actions/booksActions';

// STEP 2 Create the store
const middleware = applyMiddleware(logger);

const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';

render(
    <Provider store={store}>
        <BooksList />
    </Provider>
    , document.getElementById('app')
)

// STEP 3 Create and dispatch Action

// store.dispatch(postBooks(
//     [{
//         id: 1,
//         title: "The story of my father's life",
//         description: "Lorem isuemmla lacke ioend kdoi oinoi.Lorem isuemmla lacke ioend kdoi oinoi.",
//         price: 33.33
//     }, {
//         id: 2,
//         title: "The SECOND story of my father's life",
//         description: "Lorem isuemmla lacke ioend kdoi oinoi.Lorem isuemmla lacke ioend kdoi oinoi.",
//         price: 50
//     },]
// ))

// store.dispatch(deleteBooks({
//     id: 1
// }))

// store.dispatch(updateBooks({
//     id: 2,
//     title: 'Learn React in 2.4h'
// }))

// --->> CART ACTIONS <<---

// store.dispatch(addToCart([{ id: 1 }]))