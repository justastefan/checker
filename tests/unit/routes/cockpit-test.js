import { moduleFor, test } from 'ember-qunit';

moduleFor('route:cockpit', 'Unit | Route | cockpit', {
  // Specify the other units that are required for this test.
  needs: ['service:session', 'service:activityManager']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
