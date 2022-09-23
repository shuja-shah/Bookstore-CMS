import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

const removeBook = (bookId) => ({
  type: 'REMOVE_BOOK',
  payload: bookId,
});

export const getBooks = createAsyncThunk('GET_BOOKS', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vK6OLioSURRYt4btr4gO/books');
  const data = await response.data;
  const books = Object.keys(data).map((key) => ({
    id: key,
    title: data[key][0].title,
    author: data[key][1].author,
  }));
  return books;
});

export const addBookToAPI = createAsyncThunk('ADD_BOOK_TO_API', async (book) => {
  await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vK6OLioSURRYt4btr4gO/books', {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return book;
});

export const removeBookFromAPI = createAsyncThunk('REMOVE_BOOK_FROM_API', async (bookId) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vK6OLioSURRYt4btr4gO/books/${bookId}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return bookId;
});

export { addBook, removeBook };

createAsyncThunk();
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
