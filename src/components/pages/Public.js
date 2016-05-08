import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className='container'>
        <header role='banner'>
          <h1>Twitter favorites</h1>
        </header>
        <div>
          <p>Lets find your favorites</p>
          <a href='/login' className='button button-large'>
            <span className="twitter-logo">Login with Twitter</span>
          </a>
        </div>
      </div>
    )
  }
})
