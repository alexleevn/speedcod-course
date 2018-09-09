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