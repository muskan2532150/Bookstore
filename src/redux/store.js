import { configureStore } from '@reduxjs/toolkit';
import bookApiReducer from './books/bookApi';
import categoryReducer from './categories/category';

export default configureStore({
  reducer: {

    category: categoryReducer,
    bookApi: bookApiReducer,
  },
});
