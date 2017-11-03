import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import SecureRoute from '../mixins/secure-route';
import RSVP from 'rsvp';

export default Route.extend(SecureRoute, {
  store: service(),
  model() {
    return RSVP.hash({
      users: this.get('store').findAll('user'),
      name: '',
      email: ''
    });
  },
  actions: {
    refreshRoute() {
      this.refresh();
    }
  }
});
