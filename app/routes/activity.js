import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import SecureRoute from '../mixins/secure-route';
import RSVP from 'rsvp';

export default Route.extend(SecureRoute, {
  activityManager: service(),
  session: service(),
  model(params/*, transition*/) {

    return RSVP.hash({
      today: '2017-11-05',
      activityItems: this.get('activityManager').findAll(this.get('session.id'), params.date_id)
    });
  }
});
