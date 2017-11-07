import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import SecureRoute from '../mixins/secure-route';

export default Route.extend(SecureRoute, {
  store: service(),
  model() {
    return RSVP.hash({
      activities: this.get('store').findAll('activity'),
      dates: [
        {
          id: '2017-11-01'
        },
        {
          id: '2017-10-30'
        }
      ]
    });
  }
});
