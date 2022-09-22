import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addState } from '../redux/books/book';

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
    const newobj = {
      id: uuidv4(),
      author: input.author,
      title: input.title,
      category: input.category,
    };
    dispatch(addState(newobj));
  };

  return (
    <div className="inputBook">
      <hr />
      <h4>ADD NEW BOOK</h4>
      <form onSubmit={handleForm}>
        <input type="text" placeholder="Book title" name="title" value={input.title} onChange={onchange} />
        <input type="text" placeholder="Author" name="author" value={input.author} onChange={onchange} />
        <select name="category">
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}
