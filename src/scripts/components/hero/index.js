import renderTemplate from '../../shared/template-creator';
import template from './hero.template.html';
import styles from './hero.module.scss';

class RestaurantHero extends HTMLElement {
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

customElements.define('restaurant-hero', RestaurantHero);
