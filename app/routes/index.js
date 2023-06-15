import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    const response = await fetch('/products');
    const { data } = await response.json();
    return data;
  }
}
