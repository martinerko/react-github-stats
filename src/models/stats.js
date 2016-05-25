import Model from 'ampersand-model';
import TopStarredRepos from './top-starred-repos';
import MostFollowedUsers from './most-followed-users';
import UsersWithMostRepos from './users-with-most-repos';

export default Model.extend({
  children: {
    topStarredRepos: TopStarredRepos,
    mostFollowedUsers: MostFollowedUsers,
    usersWithMostRepos: UsersWithMostRepos
  }
});
