import { module, test } from "qunit";
import { setupTest } from "ember-qunit";
import { Items } from "../../../public/mockData/items";
import { mockCart } from "../../../public/mockData/cart";

module("Unit | Controller | cart", function (hooks) {
  setupTest(hooks);
  const Products = Items;
  const cartList = mockCart;

  test("it exists", function (assert) {
    let controller = this.owner.lookup("controller:cart");
    assert.ok(controller);
  });
});
