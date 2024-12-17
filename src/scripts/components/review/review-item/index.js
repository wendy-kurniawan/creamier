import renderTemplate from '../../../shared/template-creator';
import template from './review-item.template';
import styles from './review-item.style';

class ReviewItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    const review = this._review;
    this._shadowRoot.innerHTML = renderTemplate({ template: template(review), styles });
  }
}

customElements.define('review-item', ReviewItem);
