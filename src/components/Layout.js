import React from 'react';
import ampersandReactMixin from 'ampersand-react-mixin';
import TdiLink from './TdiLink';

//we can't use ES6 class here as we need to use mixins
export default React.createClass({
  mixins: [ampersandReactMixin],

  render() {
    const {statsModel} = this.props;

    return (
      <TdiLink>
        <nav className='top-nav top-nav-light cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
          <label htmlFor='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li><a href="/">React Github Stats</a></li>
            <li><a href="/topstarredrepositories">Top Starred Repositories</a></li>
          </ul>
        </nav>
        <div className='container'>
          {this.props.children}
        </div>
      </TdiLink>
      );
  }
});
