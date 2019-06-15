import React, { Component } from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {

  state = {
    status: 'all'
  }
  //const { resetFilter } = this.props;
  
  
  render() {

    const { resetFilter, activeFilter, doneFilter } = this.props;

    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={resetFilter}>All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={activeFilter}>Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={doneFilter}>Done</button>
      </div>
    );
  }  
}