import Route from '@ember/routing/route';

export default Route.extend({
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
