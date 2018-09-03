'use strict'

import { createStore } from 'redux'

// STEP 1 define the Reducer
const reducer = function (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.payload
        default:
            return state;
    }
}

// STEP 2 Create the store
const store = createStore(reducer);

store.subscribe(function(){
    console.log("Current state is: ", store.getState())
})

// STEP 3 Create and dispatch Action
store.dispatch({type: "INCREMENT", payload: 5});