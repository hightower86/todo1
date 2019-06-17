import React, { Component } from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {

  state = {
    filter: 'all' // all, active, done
  }
  //const { resetFilter } = this.props;
  buttons = [
      { name: 'add', label: 'Add'},
      { name: 'active', label: 'Active'},
      { name: 'done', label: 'Done'}
  ]
  
  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map((btn) => {
      return (
        <button type="button"
                className="btn btn-info"
                onClick={() => onFilterChange(btn.name)}>{btn.label}</button>
      )
    });
    
    return (
      <div className="btn-group">
        {buttons}
      </div>
    );
  }  
}