import React, { Component } from 'react';

import './styles/Loader.css';

export default class MinLoader extends Component {
  render() {
    return (
      <div className="lds-grid">
        <div />
        <div />
        <div />
      </div>
    );
  }
}