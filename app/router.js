import EmberRouter from '@ember/routing/router';
import config from 'emberjs/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('dogs');
  this.route('dog', { path: 'dog/:dog_id' });
  this.route('not-found', { path: '/*path' });
});
