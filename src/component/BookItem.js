import React from 'react'

export default function BookItem(props) {
  return (
     <div className="card">
       <div className="part1">
       <p>{props.book.category}</p>
        <h1>{props.book.title}</h1>
        <p>{props.book.author}</p>
        <div className="buttons">
            <button>comments</button>
            <button>Delete</button>
            <button>Edit</button>
        </div>
       </div>
       <div className="part2">
        <div className="circle"></div>
        <div className="text">
            <p>64%</p>
            <p>Completed</p>
        </div>
       </div>
       <div className="part3">
        <p>Current Progress</p>
        <p>Chapter 17</p>
        <button className="updatebtn">
            Update Progress
        </button>
       </div>
     </div>  
  )
}
