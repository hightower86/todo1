import React, { Component } from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {

  state = {
    filter: 'all' // all, active, done
  }
  //const { resetFilter } = this.props;

  
  render() {

    const { filter, onFilterChange } = this.props;

    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={() => onFilterChange('all')}>All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={() => onFilterChange('active')}>Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={() => onFilterChange('done')}>Done</button>
      </div>
    );
  }  
}