import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cockpit', { path: '/cockpit/:date_id' });
  this.route('users');
  this.route('login');
  this.route('logout');
});

export default Router;
