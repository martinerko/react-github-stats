import Model from 'ampersand-model';
import TopStarredRepos from './top-starred-repos';
import MostFollowedUsers from './most-followed-users';

export default Model.extend({
  children: {
    topStarredRepos: TopStarredRepos,
    mostFollowedUsers: MostFollowedUsers
  }
});
