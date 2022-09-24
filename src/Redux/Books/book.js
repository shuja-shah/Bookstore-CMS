/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const REMOVE_BOOK_FROM_API = 'bookStore/books/REMOVE_BOOK_FROM_API';

// const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/lHmx2UhvNK6tY34Detmr/books/';

const init = {
  book: [],
};

export const getBooks = createAsyncThunk(GET_BOOKS,
  async (args, { dispatch }) => {
    const bookAPi = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5xkmcG6meC270bz735ko/books/';
    const response = await fetch(bookAPi);
    const data = await response.json();
    const books = Object.keys(data).map((key) => {
      const target = data[key][0];
      return {
        item_id: key,
        ...target,
      };
    });
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
    return books;
  });

export const addBook = (book) => async (dispatch) => {
  try {
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5xkmcG6meC270bz735ko/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    dispatch({
      type: ADD_BOOK,
    });
    dispatch(getBooks());
  } catch (error) {
    console.log(error);
  }
};
export const removeBook = (id) => async (dispatch) => {
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/5xkmcG6meC270bz735ko/books/${id}`, {
    method: 'DELETE',
  })
    .then(() => dispatch({
      type: REMOVE_BOOK_FROM_API,
      payload: id,
    }))
    .then((data) => {
      console.log('remove book', data);
    });
};

const bookReducer = (state = init, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        book: action.payload,
      };
    case ADD_BOOK:
      return {
        ...state,
      };
    case REMOVE_BOOK_FROM_API:
      return {
        ...state,
        book: state.book.filter((book) => book.item_id !== action.payload),
      };
    default:
      return state;
  }
};
export default bookReducer;
