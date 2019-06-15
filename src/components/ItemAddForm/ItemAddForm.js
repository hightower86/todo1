import React, { Component } from 'react';

import './ItemAddForm.css';

export default class ItemAddForm extends Component {
  state = {
    label: ''
  }

  searchOnChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.adding(this.state.label)
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className='d-flex mt-3'
        onSubmit={this.onSubmit}>
        <input className='form-control add-input' 
                type="text" 
                placeholder='type the task'
                onChange={this.searchOnChange}
                value={this.state.label}
        />
        <button type="button"
                className="btn btn-sm btn-outline-secondary">Add</button>
      </form>
    )
  }
}