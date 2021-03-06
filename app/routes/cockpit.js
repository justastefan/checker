import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import SecureRoute from '../mixins/secure-route';

export default Route.extend(SecureRoute, {
  session: service(),
  activityManager: service(),

  model(params/*, transition*/) {
    return RSVP.hash({
      items: this.get('activityManager').findAll(this.get('session.id'), params.date_id),
      dateId: params.date_id
    });
  }
});
