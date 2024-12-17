import renderTemplate from '../../../shared/template-creator';
import template from './restaurant-item.template';
import styles from './restaurant-item.style';

class RestaurantItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const restaurant = this._restaurant;
    this._shadowRoot.innerHTML = renderTemplate({ template: template(restaurant), styles });
  }
}

customElements.define('restaurant-item', RestaurantItem);
