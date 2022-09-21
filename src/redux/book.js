import { createSlice } from '@reduxjs/toolkit';


export const counterSlice = createSlice({
    name:'book',
    initialState:{
        value:[{
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
          }]
    },
    reducers:{
        deleteState:state => {
            console.log('first time redux',state);
        }
    }
})
export const { deleteState } = counterSlice.actions

export default counterSlice.reducer
