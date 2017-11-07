import Route from '@ember/routing/route';
import SecureRoute from '../mixins/secure-route';

export default Route.extend(SecureRoute, {
  beforeModel() {
    let today = (new Date()).toISOString().slice(0,10);
    this.transitionTo('cockpit', { date_id: today});
  }
});
