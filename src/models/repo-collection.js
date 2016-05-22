import Collection from 'ampersand-collection';
import Repo from './repo';

export default Collection.extend({
  model: Repo,
  parse: function(data) {
    return data;
  }
});
