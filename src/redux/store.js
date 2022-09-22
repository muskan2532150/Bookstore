import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/book';
import categoryReducer from './categories/category';

export default configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});
