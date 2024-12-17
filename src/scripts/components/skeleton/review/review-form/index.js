import renderTemplate from '../../../../shared/template-creator';
import template from './skeleton-review-form.template.html';
import styles from './skeleton-review-form.module.scss';

class SkeletonReviewForm extends HTMLElement {
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

customElements.define('skeleton-review-form', SkeletonReviewForm);
