import React, { Component } from 'react';
import ampersandReactMixin from 'ampersand-react-mixin';
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
            <li><span className="octicon octicon-star"></span> <a href="/topstarredrepositories">Top Starred Repositories</a></li>
            <li><span className="octicon octicon-person"></span> <a href="/mostfollowedusers">Most Followed Users</a></li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </TdiLink>
      );
  }
}
