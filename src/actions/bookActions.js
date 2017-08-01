import Axios from 'axios';

export const createBook = (book) => {
    // Return action
    return {
        // Unique identifier
        type: 'CREATE_BOOK',
        // Payload
        book: book
    };
};

const apiUrl = 'http://www.mocky.io/v2/598056bb11000053091cf97f';

export const fetchBooksSuccess = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        books
    };
};

export const fetchBooks = () => {
    return (dispatch) => {
        return Axios.get(apiUrl)
            .then(res => {
                dispatch(fetchBooksSuccess(res.data));
            })
            .catch(err => {
                throw (err);
            });
    };
};