import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import SecureRoute from '../mixins/secure-route';

export default Route.extend(SecureRoute, {
  category: service(),

  model(params/*, transition*/) {
    return this.get('category').findAll(1, params.date_id);
  }
});
