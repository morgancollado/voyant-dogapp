import { module, test } from 'qunit';
import { setupRenderingTest } from 'emberjs/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | dog/details', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Dog::Details />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Dog::Details>
        template block text
      </Dog::Details>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
