import renderTemplate from '../../../shared/template-creator';
import template from './skeleton-heading.template.html';
import styles from './skeleton-heading.module.scss';

class SkeletonHeading extends HTMLElement {
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

customElements.define('skeleton-heading', SkeletonHeading);
