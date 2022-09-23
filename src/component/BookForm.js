import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addState, postBook } from '../redux/books/bookApi';

export default function BookForm() {
  const [input, setInput] = useState({ title: '', author: '', category: '' });

  const dispatch = useDispatch();

  onchange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const name = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const category = document.querySelector('#category').value;
    const newobj = {
      id,
      author: input.author,
      title: input.title,
      category: input.category,
    };
    dispatch(addState(newobj));
    dispatch(postBook(id, name, author, category));
  };

  return (
    <div className="inputBook">
      <hr />
      <h4>ADD NEW BOOK</h4>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Book title" name="title" value={input.title} onChange={onchange} id="title" />
        <input type="text" placeholder="Author" name="author" value={input.author} onChange={onchange} id="author" />
        <select name="category" id="category">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}
