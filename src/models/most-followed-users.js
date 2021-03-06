import GithubResultModel from './github-result';
import UserCollection from './user-collection';

export default GithubResultModel.extend({
  _svc: '/users?q=+followers:>10000&sort=followers',

  collections: {
    items: UserCollection
  }
});
