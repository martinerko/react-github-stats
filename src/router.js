import { statsModel } from 'ampersand-app';
import Router from 'ampersand-router';
import React from 'react';
import ReactDOM from 'react-dom';
import PublicPage from './components/pages/Public';
import Layout from './components/Layout';
import TopStarredRepositoriesPage from './components/pages/TopStarredRepositories';

export default Router.extend({
  routes: {
    '': 'public',
    'topstarredrepositories': 'topStarredRepositories',
    'mostfollowedusers': 'mostFollowedUsers',
    'userswithmostrepositories': 'usersWithMostRepositories'
  },

  renderPage(page, layout = true) {
    if (layout) {
      page = (
        <Layout statsModel={app.statsModel}>
          {page}
        </Layout>
      );
    }

    ReactDOM.render(page, document.body);
  },

  public() {
    this.renderPage(<PublicPage />);
  },

  topStarredRepositories() {
    statsModel.topStarredRepos.loadData();

    this.renderPage(<TopStarredRepositoriesPage repos={app.statsModel.topStarredRepos.items} />);
  },

  mostFollowedUsers() {
    //this.renderPage(<MostFollowedUsersPage />);
  },

  usersWithMostRepositories() {
    //this.renderPage(<UsersWithMostRepositoriesPage />);
  }
});
