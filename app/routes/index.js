import Route from '@ember/routing/route';
import SecureRoute from '../mixins/secure-route';

export default Route.extend(SecureRoute, {
  model() {
    return [
      {
        id: '2017-11-01'
      },
      {
        id: '2017-10-30'
      }
    ]
  }
});
