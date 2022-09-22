import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const counterSlice = createSlice({
  name: 'book',
  initialState: [{
    id: uuidv4(),
    author: 'Suzzane Collins',
    title: 'The Hunger Game',
    category: 'Action',
  },
  {
    id: uuidv4(),
    author: 'Frank Herbert',
    title: 'Dune',
    category: 'Science Fiction',
  },
  {
    id: uuidv4(),
    author: 'Suzzane Collins',
    title: 'Capital in the Twenty-First Century',
    category: 'Economy',
  }],
  reducers: {
    deleteState: (state, action) => state.filter((book) => book.id !== action.payload),

    addState: (state, action) => {
      state.push(action.payload);
    },

  },
});
export const { deleteState, addState } = counterSlice.actions;

export default counterSlice.reducer;
