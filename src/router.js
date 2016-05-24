import { statsModel } from 'ampersand-app';
import Router from 'ampersand-router';
import React from 'react';
import ReactDOM from 'react-dom';
import PublicPage from './components/pages/Public';
import Layout from './components/Layout';
import TopStarredRepositoriesPage from './components/pages/TopStarredRepositories';
import MostFollowedUsersPage from './components/pages/MostFollowedUsers';

export default Router.extend({

  routes: {
    '': 'public',
    'topstarredrepositories': 'topStarredRepositories',
    'mostfollowedusers': 'mostFollowedUsers',
    'userswithmostrepositories': 'usersWithMostRepositories'
  },

  initialize: function() {
    this.appRoot = document.body.appendChild(document.createElement("div"));
  },

  renderPage(page, layout = true) {
    if (layout) {
      page = (
        <Layout>
          {page}
        </Layout>
      );
    }

    ReactDOM.render(page, this.appRoot);
  },

  public() {
    this.renderPage(<PublicPage />);
  },

  topStarredRepositories() {
    statsModel.topStarredRepos.loadData();

    this.renderPage(<TopStarredRepositoriesPage repos={statsModel.topStarredRepos.items} />);
  },

  mostFollowedUsers() {
    statsModel.mostFollowedUsers.loadData();
    this.renderPage(<MostFollowedUsersPage users={statsModel.mostFollowedUsers.items} />);
  }

// usersWithMostRepositories() {
//   this.renderPage(<UsersWithMostRepositoriesPage  users={statsModel.topStarredRepos.items} />);
// }
});
