import { module, test } from 'qunit';
import { setupTest } from 'emberjs/tests/helpers';

module('Unit | Route | dogs', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dogs');
    assert.ok(route);
  });
});
