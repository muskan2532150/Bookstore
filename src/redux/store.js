import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book';

export default configureStore({
  reducer: {
    book:bookReducer,
  }
})