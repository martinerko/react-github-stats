import React, { Component } from 'react';
import TdiLink from './TdiLink';

export default class Layout extends Component {
  render() {
    return (
      <TdiLink>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li><span className="octicon octicon-mark-github"></span> <a href="/">React Github Stats</a></li>
            <li><span className="octicon octicon-star"></span> <a href="/topstarredrepositories">Top starred repositories</a></li>
            <li><span className="octicon octicon-person"></span> <a href="/mostfollowedusers">Most followed users</a></li>
            <li><span className="octicon octicon-person"></span> <a href="/userswithmostrepositories">Users with most repositories</a></li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </TdiLink>
      );
  }
}
