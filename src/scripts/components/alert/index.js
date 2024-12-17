import renderTemplate from '../../shared/template-creator';
import template from './alert.template';
import styles from './alert.style';

class Alert extends HTMLElement {
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

customElements.define('ui-alert', Alert);
