import { module, test } from 'qunit';
import { setupTest } from 'emberjs/tests/helpers';

module('Unit | Route | dog', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dog');
    assert.ok(route);
  });
});
