import Model from 'ampersand-model';
import TopStarredRepos from './top-starred-repos';

export default Model.extend({
  children: {
    topStarredRepos: TopStarredRepos
  },

  loadInitialData: function() {
    this.topStarredRepos.fetch();
  }
});
