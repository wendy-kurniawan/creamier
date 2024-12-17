import renderTemplate from '../../../../shared/template-creator';
import styles from './skeleton-restaurant-list.module.scss';
import '../restaurant-item';

class SkeletonRestaurantList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._restaurants = [];
  }

  connectedCallback() {
    this._restaurants = new Array(20).fill(null);
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = renderTemplate({ styles });

    const restaurantItems = document.createDocumentFragment();
    this._restaurants.forEach(() => {
      const restaurantItem = document.createElement('skeleton-restaurant-item');
      restaurantItems.appendChild(restaurantItem);
    });

    const restaurantList = document.createElement('div');
    restaurantList.setAttribute('id', 'restaurants');
    restaurantList.setAttribute('role', 'list');
    restaurantList.classList.add('meals');
    restaurantList.appendChild(restaurantItems);
    this._shadowRoot.appendChild(restaurantList);
  }
}

customElements.define('skeleton-restaurant-list', SkeletonRestaurantList);
