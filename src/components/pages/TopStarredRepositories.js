import React from 'react';
import ampersandReactMixin from 'ampersand-react-mixin';

//we can't use ES6 class here as we need to use mixins
export default React.createClass({
  mixins: [ampersandReactMixin],

  render() {
    const {repos} = this.props;

    return (
      <div>
        <h2>Top Starred Repositories</h2>
        <ul>
          {repos.map((r) => <li key={r.id}><span className="octicon octicon-repo"></span> <a href={r.html_url} target="_blank">{r.full_name}</a> [<span className="octicon octicon-star"></span> {r.stargazers_count}] </li>)}
        </ul>
      </div>
      );
  }
});
