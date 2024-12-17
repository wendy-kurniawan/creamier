import renderTemplate from '../../../shared/template-creator';
import template from './skeleton-detail.template';
import styles from './skeleton-detail.module.scss';

class SkeletonDetail extends HTMLElement {
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

customElements.define('skeleton-detail', SkeletonDetail);
