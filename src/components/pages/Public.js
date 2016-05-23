import React, { Component } from 'react';

export default class Public extends Component {
  render() {
    return (
      <div>
        <header role='banner'>
          <h1>React GitHub Stats</h1>
          <div className="mega-octicon octicon-mark-github"></div>
        </header>
        <div>
          <p className="intro">Lets discover some nice stats!</p>
        </div>
      </div>
      );
  }
}
