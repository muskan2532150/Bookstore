import React from 'react';
import BookContainer from './BookContainer';
import BookForm from './BookForm';

export default function Books() {
  return (
    <div className="container">
      <BookContainer />
      <BookForm />
    </div>
  );
}
