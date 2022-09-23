/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';

const urlId = 'sw3jWjnLEk0bR8XrWaMv';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

// creating variable like Enum
const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'oading',
});

export const bookSlice = createSlice({
  name: 'bookApi',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {

    getBook: (state, action) => {
      state.data = action.payload;
    },

    setStatus: (state, action) => {
      state.status = action.payload;
    },

    deleteState: (state, action) => {
      state.data.splice(action.payload, 1);
    },

    addState: (state, action) => {
      state.data.push(action.payload);
    },

  },
});
export const {
  deleteState, addState, getBook, setStatus,
} = bookSlice.actions;

export default bookSlice.reducer;

// Thunks

export function fetchBook() {
  return async function fecthBookThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch(`${URL}/apps/${urlId}/books`);
      const data = await res.json();
      const array = [];
      Object.entries(data).forEach(([id, book]) => array.push({
        id,
        category: book[0].category,
        title: book[0].title,
        author: book[0].author,
      }));
      dispatch(getBook(array));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function postBook(id, name, author, category) {
  return async function postBookThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      await fetch(`${URL}/apps/${urlId}/books`, {
        method: 'POST',
        body: JSON.stringify({
          item_id: `${id}`,
          title: `${name}`,
          author: `${author}`,
          category: `${category}`,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      dispatch(addState({
        id,
        category,
        title: name,
        author,
      }));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

export function removeBook(id) {
  return async function removeBookThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      await fetch(`${URL}/apps/${urlId}/books/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
      dispatch(fetchBook());
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
