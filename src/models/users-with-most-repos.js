import GithubResultModel from './github-result';
import UserCollection from './user-collection';

export default GithubResultModel.extend({
  _svc: '/users?q=+repos:>=5000+type:user&sort=repos',

  collections: {
    items: UserCollection.extend({})
  }
});
