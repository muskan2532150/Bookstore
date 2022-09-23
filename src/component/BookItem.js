/* eslint-disable react/prop-types */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteState } from '../redux/books/bookApi';
// import {removeBook } from '../redux/books/bookApi';

//  import PropTypes from 'prop-types';

// destructuring props as book using {book}

const BookItem = ({ book }) => {
  const { data } = useSelector((state) => state.bookApi);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="part1">
        <p>{book.category}</p>
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <div className="buttons">
          <button type="button">comments</button>
          <button type="button" onClick={() => dispatch(deleteState(data.indexOf(book)))}>Delete</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="part2">
        <div className="circle" />
        <div className="text">
          <p>64%</p>
          <p>Completed</p>
        </div>
      </div>
      <div className="part3">
        <p>Current Progress</p>
        <p>Chapter 17</p>
        <button className="updatebtn" type="button">
          Update Progress
        </button>
      </div>
    </div>
  );
};

// validation for props book
// BookItem.propTypes = {
//   author: PropTypes.string,
//   title: PropTypes.string,
//   category: PropTypes.string,
// };

export default BookItem;
