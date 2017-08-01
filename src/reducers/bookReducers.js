export default (state = [], action) => {
    switch (action.type) {
        // Check if action dispatched is
        // CREATE_BOOK and act on that
        case 'CREATE_BOOK':
            return [
                ...state,
                Object.assign({}, action.book)
            ];
        case 'FETCH_BOOKS_SUCCESS':
            return action.books;
        default:
            return state;
    }
};