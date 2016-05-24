import Collection from 'ampersand-collection';
import user from './user';

export default Collection.extend({
  model: user,
  parse: function(data) {
    return data;
  }
});
