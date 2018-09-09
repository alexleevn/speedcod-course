'use strict'

// card reducers

export function cartReducers(state = { cart: [] }, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { cart: [...action.payload] }
    }
    return state;
}