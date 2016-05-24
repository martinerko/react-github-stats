import Model from 'ampersand-model';

export default Model.extend({
  props: {
    'id': 'number',
    'login': 'string',
    'html_url': 'string'
  }
});
