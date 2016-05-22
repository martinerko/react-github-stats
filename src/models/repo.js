import Model from 'ampersand-model';

export default Model.extend({
  props: {
    'id': 'number',
    'name': 'string',
    'full_name': 'string',
    'stargazers_count': 'number',
    'html_url': 'string'
  }
});
