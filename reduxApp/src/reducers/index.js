'use strict'

import { combineReducers } from 'redux';

// IMPORT REDUCERS TO BE COMBINED
import { booksReducers } from './booksReducers';
import { cartReducers } from './cartReducers'

// COMBINE THE RUDUCERS
export default combineReducers({
    books: booksReducers,
    cart: cartReducers
})