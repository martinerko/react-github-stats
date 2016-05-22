import app from 'ampersand-app';
import Router from './router';
import styles from './styles/main.styl';
import StatsModel from './models/stats';

window.app = app

app.extend({
  init() {
    this.statsModel = new StatsModel();
    this.router = new Router();
    this.router.history.start();
  }
});

app.init();
