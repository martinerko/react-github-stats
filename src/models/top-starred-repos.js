import Model from 'ampersand-model';
import RepoCollection from './repo-collection';
import { CLIENT_ID, CLIENT_SECRET } from '../conf';

export default Model.extend({
  url: `https://api.github.com/search/repositories?q=created:>1900-01-01&sort=stars&order=desc&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,

  props: {
    '_fetched': 'boolean',
    'total_count': 'number'
  },

  collections: {
    items: RepoCollection
  },

  initialize: function() {
    this.set('_fetched', false);
  },

  loadData: function() {
    if (this._fetched) {
      return;
    }
    this.fetch({
      success: function(model) {
        model.set('_fetched', true);
      }
    });
  }
});
