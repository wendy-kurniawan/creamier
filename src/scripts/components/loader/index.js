import renderTemplate from '../../shared/template-creator';
import template from './loader.template.html';
import styles from './loader.module.scss';

class Loader extends HTMLElement {
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

customElements.define('ui-loader', Loader);
