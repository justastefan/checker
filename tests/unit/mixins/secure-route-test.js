import EmberObject from '@ember/object';
import SecureRouteMixin from 'checker/mixins/secure-route';
import { module, test } from 'qunit';

module('Unit | Mixin | secure route');

// Replace this with your real tests.
test('it works', function(assert) {
  let SecureRouteObject = EmberObject.extend(SecureRouteMixin);
  let subject = SecureRouteObject.create();
  assert.ok(subject);
});
