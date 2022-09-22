import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addState } from '../redux/books/book';

export default function BookForm() {
  const [input, setState] = useState({ title: '', author: '' });

  const dispatch = useDispatch();

  onchange = (e) => {
    console.log(input.title);
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();
    const newobj = {
      id: 4,
      author: input.author,
      title: input.title,
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
