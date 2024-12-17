import renderTemplate from '../../../../shared/template-creator';
import template from './skeleton-pricing-item.template.html';
import styles from './skeleton-pricing-item.module.scss';

class SkeletonPricingItem extends HTMLElement {
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

customElements.define('skeleton-pricing-item', SkeletonPricingItem);
