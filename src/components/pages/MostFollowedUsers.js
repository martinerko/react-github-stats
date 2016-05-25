import React from 'react';
import ampersandReactMixin from 'ampersand-react-mixin';

//we can't use ES6 class here as we need to use mixins
export default React.createClass({
  mixins: [ampersandReactMixin],

  title: 'Most followed users',

  render() {
    const {users} = this.props;

    return (
      <div>
        <h2>{this.title}</h2>
        <ul>
          {users.map((u) => <li key={u.id}><span className="octicon octicon-person"></span> <a href={u.html_url} target="_blank">{u.login}</a></li>)}
        </ul>
      </div>
      );
  }
});
