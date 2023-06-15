import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | item', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Product />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Product>
        template block text
      </Product>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('should correctly concat foo', function(assert) {
    const productComponent = this.owner.lookup('component:product');
    productComponent.zoom = false;

    assert.equal(productComponent.computedFoo, false);
  });
});
