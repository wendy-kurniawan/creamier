import renderTemplate from '../../../../shared/template-creator';
import styles from './skeleton-review-list.module.scss';
import '../review-item';

class SkeletonReviewList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._reviews = [];
  }

  connectedCallback() {
    this._reviews = new Array(3).fill(null);
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = renderTemplate({ styles });

    const reviewItems = document.createDocumentFragment();
    this._reviews.forEach(() => {
      const reviewItem = document.createElement('skeleton-review-item');
      reviewItems.appendChild(reviewItem);
    });

    const reviewList = document.createElement('div');
    reviewList.setAttribute('id', 'reviews');
    reviewList.setAttribute('role', 'list');
    reviewList.classList.add('review');
    reviewList.appendChild(reviewItems);
    this._shadowRoot.appendChild(reviewList);
  }
}

customElements.define('skeleton-review-list', SkeletonReviewList);
