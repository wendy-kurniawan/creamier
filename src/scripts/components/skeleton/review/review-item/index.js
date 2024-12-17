import renderTemplate from '../../../../shared/template-creator';
import template from './skeleton-review-item.template.html';
import styles from './skeleton-review-item.module.scss';

class SkeletonReviewItem extends HTMLElement {
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

customElements.define('skeleton-review-item', SkeletonReviewItem);
