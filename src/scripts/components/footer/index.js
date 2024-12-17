import renderTemplate from '../../shared/template-creator';
import template from './footer.template.html';
import styles from './footer.module.scss';

class RestaurantFooter extends HTMLElement {
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

customElements.define('restaurant-footer', RestaurantFooter);
