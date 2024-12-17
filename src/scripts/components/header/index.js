import renderTemplate from '../../shared/template-creator';
import template from './header.template';
import styles from './header.module.scss';
import NavigationInitiator from '../../utils/navigation-initiator';

class RestaurantHeader extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = renderTemplate({ template, styles });
    this._bindNavigationInitiator();
  }

  _bindNavigationInitiator() {
    NavigationInitiator.init({
      button: this._shadowRoot?.getElementById('menu'),
      navigation: this._shadowRoot?.getElementById('navigation'),
    });
  }
}

customElements.define('restaurant-header', RestaurantHeader);
