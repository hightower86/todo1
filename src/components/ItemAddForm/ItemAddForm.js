import React, { Component } from 'react';

import './ItemAddForm.css';

export default ({adding}) => {
  return (
    <div className='d-flex mt-3'>
      <input className='form-control add-input' type="text" placeholder='type the task'/>
      <button type="button"
              onClick={()=>adding('hello world')}
                className="btn btn-sm btn-outline-secondary">Add</button>
    </div>
  );
};