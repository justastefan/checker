import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
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
