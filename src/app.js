import app from 'ampersand-app'
import Router from './router'
import styles from './styles/main.styl'

app.extend({
  init() {
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()
