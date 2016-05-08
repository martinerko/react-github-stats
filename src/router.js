import Router from 'ampersand-router'
import React from 'react'
import ReactDOM from 'react-dom'
import PublicPage from './components/pages/Public'
import FavoritesPage from './components/pages/Favorites'
import Layout from './components/Layout'

export default Router.extend({
  routes: {
    '': 'public',
    'favorites': 'favorites'
  },

  renderPage(page, layout = true) {
    if (layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      )
    }

    ReactDOM.render(page, document.body.appendChild(document.createElement("div")))
  },

  public() {
    this.renderPage(<PublicPage/>, false)
  },

  favorites() {
    this.renderPage(<FavoritesPage/>)
  }
})
