import Component from "@glimmer/component";
import { inject as service } from "@ember/service";

export default class CartContainerComponent extends Component {
  @service cart;
  get getItemCount() {
    return this.cart.cartList.reduce((total, item) => {
      return total + item.count;
    }, 0);
  }
}
