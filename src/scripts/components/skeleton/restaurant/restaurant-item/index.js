import renderTemplate from '../../../../shared/template-creator';
import template from './skeleton-restaurant-item.template';
import styles from './skeleton-restaurant-item.module.scss';

class SkeletonRestaurantItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = renderTemplate({ template, styles });
  }
}

customElements.define('skeleton-restaurant-item', SkeletonRestaurantItem);
