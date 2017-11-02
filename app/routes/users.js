import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import SecureRoute from '../mixins/secure-route';

export default Route.extend(SecureRoute, {
  store: service(),
  model() {
    return this.get('store').findAll('user');
  }
});
