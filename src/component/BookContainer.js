import React from 'react';
import BookItem from './BookItem'

export default function BookContainer() {
    const booksObj = [{
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
      }];
  return (
    <>
    {booksObj.map(book => (
        <BookItem key={book.id} book={book}/>
    ))}
    </>
  )
}
