import renderTemplate from '../../../shared/template-creator';
import styles from './favorite-restaurant-list.module.scss';
import '../restaurant-item';

class FavoriteRestaurantList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._restaurants = [];
  }

  set restaurants(restaurants = []) {
    this._restaurants = restaurants;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = renderTemplate({ styles });

    const restaurantItems = document.createDocumentFragment();
    this._restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('restaurant-item');
      restaurantItem.restaurant = restaurant;
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

customElements.define('favorite-restaurant-list', FavoriteRestaurantList);
