import React, { Component } from 'react'
import TdiLink from '../TdiLink'

export default class Public extends Component {
  render() {
    return (
      <TdiLink className='container'>
        <header role='banner'>
          <h1>Twitter favorites</h1>
        </header>
        <div>
          <p>Lets find your favorites</p>
          <a href='/favorites' className='button button-large'>
            <span className="twitter-logo">Login with Twitter</span>
          </a>
        </div>
      </TdiLink>
    )
  }
}
