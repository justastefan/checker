import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  category: service(),

  model(params/*, transition*/) {
    return this.get('category').findAll(1, params.date_id);
  }
});
