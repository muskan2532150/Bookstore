import { useState } from 'react';

export default function BookForm() {
  const [input, setState] = useState({ title: '', author: '' });
  onchange = (e) => {
    setState({
      [e.target.name]: e.target.value,

    });
  };

  // handleForm = (e) =>{
  //   e.preventDefault();
  //   this.props.addbook(newbook);
  // }

  return (
    <div className="inputBook">
      <hr />
      <h4>ADD NEW BOOK</h4>
      <form>
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
