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
            <li>React Github Stats</li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </TdiLink>
      );
  }
}
