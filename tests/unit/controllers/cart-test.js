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
  test("should update subtotal", function (assert) {
    assert.expect(4);

    // get the controller instance
    let controller = this.owner.lookup("controller:cart");
    let service = this.owner.lookup("service:cart");
    service.cartList = mockCart;

    // trigger the action on the controller by using the `send` method,
    // passing in any params that our action may be expecting
    controller.send("changeItemCount", cartList[0], { target: { value: 3 } });

    // finally we assert that our values have been updated
    // by triggering our action.
    assert.equal(service.cartList[0].count, 1, 3);
  });
});
