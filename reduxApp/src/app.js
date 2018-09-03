'use strict'

import { createStore } from 'redux'

// STEP 1 define the Reducer
const reducer = function (state = { books: [] }, action) {
    switch (action.type) {
        case 'POST_BOOK':
            return { books: [...state.books, ...action.payload] };
        case 'DELETE_BOOK':
            const currentBookToDelete = [...state.books];
            const indexToDelete = currentBookToDelete.findIndex(
                function (book) {
                    return book.id === action.payload.id;
                }
            )
            return {
                books: [
                    ...currentBookToDelete.slice(0, indexToDelete),
                    ...currentBookToDelete.slice(indexToDelete + 1)
                ]
            }
        default:
            return state;
    }
}

// STEP 2 Create the store
const store = createStore(reducer);

store.subscribe(function () {
    console.log("current state is: ", store.getState())
})

// STEP 3 Create and dispatch Action
store.dispatch(
    {
        type: "POST_BOOK",
        payload: [{
            id: 1,
            title: "The story of my father's life",
            description: "Lorem isuemmla lacke ioend kdoi oinoi.Lorem isuemmla lacke ioend kdoi oinoi.",
            price: 33.33
        }, {
            id: 2,
            title: "The SECOND story of my father's life",
            description: "Lorem isuemmla lacke ioend kdoi oinoi.Lorem isuemmla lacke ioend kdoi oinoi.",
            price: 50
        },]
    });
store.dispatch({
    type: 'DELETE_BOOK',
    payload: {
        id: 1
    }
})
