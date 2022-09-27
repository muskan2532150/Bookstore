import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBook } from '../redux/books/bookApi';
import BookItem from './BookItem';

export default function BookContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { data: value } = useSelector((state) => state.bookApi);
  return (
    <>
      {value.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}

    </>
  );
}
