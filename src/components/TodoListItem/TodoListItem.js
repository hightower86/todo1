import React from "react";

import './TodoListItem.css';

export default (props) => {
  const { label, onDeleted,
            onToggleImportant, 
            onToggleDone,
            done, important } = props;

  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important';
  }

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };
  return (
    <span className={classNames}>
      <span
        className="todo-list-item-label"
        style={style}
        onClick={onToggleDone}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={onToggleImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              onClick={onDeleted}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}