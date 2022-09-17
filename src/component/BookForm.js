// import React from 'react'

// export default function BookForm() {
//   return (
//     <form onSubmit={handleForm}>
//       <input type="text" placeholder='Book title' />
//       <input type="text" placeholder='Author' />
//       <select name="category">
//         <option value="Action">Action</option>
//         <option value="Science Fiction">Science Fiction</option>
//         <option value="Economy">Economy</option>
//       </select>
//       <button type='submit' >Add book</button>
//     </form>
//   )
// }

import React, { Component } from 'react'

export default class BookForm extends Component {
  state = {
    title:"",
    author:'',
  }

  onchange =(e) =>{
    this.setState({
      [e.target.name]:e.target.value,
    
    }
    )
  }

// handleForm = (e) =>{
//   e.preventDefault();
//   this.props.addbook(newbook);
// }

  render() {
    return (
      <div className="inputBook">
        <hr />
      <h4>ADD NEW BOOK</h4>
      <form>
      <input type="text" placeholder='Book title' name="title" value={this.state.title}  onChange={this.onchange} />
      <input type="text" placeholder='Author' name='author' value={this.state.author} onChange={this.onchange} />
      <select name="category">
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button type='submit' >Add book</button>
    </form>
      </div>    
    )
  }
}

