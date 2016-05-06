import React from 'react'
import ReactDOM from 'react-dom';
require('./styles/main.styl')

const HelloWorld = React.createClass({
  render() {
    return <div>Hellow world!</div>
  }
})

ReactDOM.render(<HelloWorld />, document.body)
