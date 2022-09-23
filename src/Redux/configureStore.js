import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './Books/book';
import statusReducer from './Categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  status: statusReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
