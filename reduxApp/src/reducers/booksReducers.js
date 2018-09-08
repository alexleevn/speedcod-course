'use strict'

export function booksReducers(
    state = {
        books: [{
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
    }, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return { ...state, books: [...state.books] }
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
        case 'UPDATE_BOOK':
            const currentBookToUpdate = [...state.books];
            const indexToUpdate = currentBookToUpdate.findIndex(
                function (book) {
                    return book.id === action.payload.id
                }
            )
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            }

            console.log('What is it newBookToUpdate', newBookToUpdate);

            return {
                books: [
                    ...currentBookToUpdate.slice(0, indexToUpdate),
                    newBookToUpdate,
                    ...currentBookToUpdate.slice(indexToUpdate + 1)
                ]
            }
        default:
            return state;
    }
}
