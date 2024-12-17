import renderTemplate from '../../../shared/template-creator';
import styles from './review-list.module.scss';
import '../review-item';

class ReviewList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._reviews = [];
  }

  set reviews(reviews = []) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = renderTemplate({ styles });

    const reviewItems = document.createDocumentFragment();
    this._reviews.forEach((review) => {
      const reviewItem = document.createElement('review-item');
      reviewItem.review = review;
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

customElements.define('review-list', ReviewList);
