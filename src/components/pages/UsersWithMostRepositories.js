import UsersPage from './MostFollowedUsers';

export default class UsersWithMostRepositories extends UsersPage {
  constructor(props) {
    super(props);
    this.title = 'Users with most repositories';
  }
}
