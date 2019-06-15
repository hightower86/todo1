import React, { Component } from 'react';

import './ItemStatusFilter.css';

export default class ItemStatusFilter extends Component {

  //const { resetFilter } = this.props;
  
  render() {
    return (
      <div className="btn-group">
        <button type="button"
                className="btn btn-info"
                onClick={this.props.resetFilter}>All</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.props.activeFilter}>Active</button>
        <button type="button"
                className="btn btn-outline-secondary"
                onClick={this.props.doneFilter}>Done</button>
      </div>
    );
  }  
}