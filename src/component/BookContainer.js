import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';

export default function BookContainer() {
  const value = useSelector((state) => state.book);
  return (
    <>
      {value.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </>
  );
}
