// import React from 'react';
import React, { Component } from 'react';

import BookItem from './BookItem'

// export default function BookContainer() {
//     const booksObj = [{
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

//  addBook = (newbook) =>{
//   this.setState
//  }

//   return (
//     <>
//     {booksObj.map(book => (
//         <BookItem key={book.id} book={book}/>
//     ))}
//     </>
//   )
// }



export default class BookContainer extends Component {
  state = {
booksObj:[{
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
  }

  addBook = (newbook) =>{
    this.setState(prevState=>{
      return {
        booksObj:[...prevState.booksObj,newbook]
      }
    })
   }

  render() {
    return (
      <>       
    {this.state.booksObj.map(book => (
        <BookItem key={book.id} book={book}/>
    ))}
    
    </>
    )
  }
}
