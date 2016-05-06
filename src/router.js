import Router from 'ampersand-router'
import React from 'react'
import ReactDOM from 'react-dom'
import PublicPage from './pages/public'
import FavoritesPage from './pages/favorites'

export default Router.extend({
  routes: {
    '': 'public',
    'favorites': 'favorites'
  },

  public() {
    ReactDOM.render(<PublicPage/>, document.body)
  },

  favorites() {
    ReactDOM.render(<FavoritesPage/>, document.body)
  }
})
