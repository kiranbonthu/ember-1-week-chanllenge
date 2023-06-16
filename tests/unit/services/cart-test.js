import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Service | cart", function (hooks) {
  setupTest(hooks);
  const mockData=[
    {
      id: "1",
      name: "Smart Watch for Men Women",
      price: {
        original: 199.95,
        current: 99.98,
      },
      image: "https://m.media-amazon.com/images/I/71YhTRvNj5L._AC_SL1500_.jpg",
      color: "pink",
    },
    {
      id: "2",
      name: "Casio Unisex",
      price: {
        original: 22.95,
        current: 16.98,
      },
      image: "https://m.media-amazon.com/images/I/510T962DtNL._AC_UY535_.jpg",
      color: "black",
    },
    {
      id: "4",
      name: "Apple Watch SE ",
      price: {
        original: 22.95,
        current: 16.98,
      },
      image: "https://m.media-amazon.com/images/I/71YdE55GwjL._AC_SL1500_.jpg",
      color: "lightGrey",
    },
  ]
  test("it exists", function (assert) {
    let service = this.owner.lookup("service:cart");
    assert.ok(service);
  });

  test("should remove item", function (assert) {
    const service = this.owner.lookup("service:cart");
    service.cartList = mockData;
    assert.equal(service.cartList.length, 3);
    service.remove(mockData[0]);
    assert.equal(service.cartList.length, 2);
  });
});
