import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'book',
  initialState: [{
    id: 1,
    author: 'Suzzane Collins',
    title: 'The Hunger Game',
    category: 'Action',
  },
  {
    id: 2,
    author: 'Frank Herbert',
    title: 'Dune',
    category: 'Science Fiction',
  },
  {
    id: 3,
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

// export const deleteState =(id)=>{
//  return {
//   type:'Delete-book',
//   payload:id
//  }
// }

// const initialState =[{
//         id: 1,
//         author: 'Suzzane Collins',
//         title: 'The Hunger Game',
//         category: 'Action',
//       },
//       {
//         id: 2,
//         author: 'Frank Herbert',
//         title: 'Dune',
//         category: 'Science Fiction',
//       },
//       {
//         id: 3,
//         author: 'Suzzane Collins',
//         title: 'Capital in the Twenty-First Century',
//         category: 'Economy',
//       }];

// const deleteBook = (state=initialState,action) => {
//   [...state.filter((book) =>{return book.id !== id})]
// }

// export  default deleteBook
