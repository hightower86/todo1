import React from "react";
import './TodoListItem.css';

const TodoListItem = ({ label, important = false }) => {
  
  const className = important ? 'font-weight-bold text-info' : 'black';
  
  return (
    <div className="d-flex bd-highlight">
      <span className={`p-2 flex-grow-1 bd-highlight ${className}`}>{ label }</span>
      <btn className="p-2 bd-highlight btn btn-outline-success mr-2">CC.</btn>
      <btn className="p-2 bd-highlight btn btn-outline-danger">!!!!!</btn>

    </div>
  )
}

export default TodoListItem;