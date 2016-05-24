import GithubResultModel from './github-result';
import RepoCollection from './repo-collection';

export default GithubResultModel.extend({
  _svc: `/repositories?q=created:>1900-01-01&sort=stars`,

  collections: {
    items: RepoCollection
  }
});
