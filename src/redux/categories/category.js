import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: '',
  reducers: {
    verifyState: (state) => {
      if (state === '') {
        return 'Under Construction';
      }
      return state;
    },
  },
});

export const { verifyState } = categorySlice.actions;

export default categorySlice.reducer;
