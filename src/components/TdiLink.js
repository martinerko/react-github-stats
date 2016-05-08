import React, { Component } from 'react'
import localLinks from 'local-links'

export default class TdiLink extends Component {
  onClick(event) {
    const pathname = localLinks.getLocalPathname(event)

    if (pathname) {
      event.preventDefault()
      app.router.history.navigate(pathname)
    }
  }

  render() {
    return (
      <div onClick={this.onClick} {...this.props}>
          {this.props.children}
      </div>
    )
  }
}
