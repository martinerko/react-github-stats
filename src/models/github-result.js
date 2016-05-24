import Model from 'ampersand-model';
import { CLIENT_ID, CLIENT_SECRET } from '../conf';

export default Model.extend({
  props: {
    'total_count': 'number'
  },

  initialize: function() {
    this.url = `https://api.github.com/search${this._svc}&order=desc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    this._fetched = false;
  },

  loadData: function() {
    if (this._fetched) {
      return;
    }
    this.fetch({
      success: function(model) {
        model._fetched = true;
      }
    });
  }
});
