import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <ul>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/category">Categories</Link></li>
      </ul>
    </nav>
  );
}
