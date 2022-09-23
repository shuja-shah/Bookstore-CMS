const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

const removeBook = (bookId) => ({
  type: 'REMOVE_BOOK',
  payload: bookId,
});

export { addBook, removeBook };

const initialState = {
  books: [

    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
    },
    {
      id: 2,
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: 3,
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },

  ],
};
const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: state.books.concat(action.payload),
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};
export default bookReducer;
