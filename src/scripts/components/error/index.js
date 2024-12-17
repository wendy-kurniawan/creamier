import renderTemplate from '../../shared/template-creator';
import template from './error.template.html';
import styles from './error.module.scss';

class ErrorPlaceholder extends HTMLElement {
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

customElements.define('error-placeholder', ErrorPlaceholder);
