import renderTemplate from '../../../shared/template-creator';
import template from './review-form.template';
import styles from './review-form.style';

class ReviewForm extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  get element() {
    return this._shadowRoot.querySelector('#review-form');
  }

  set reviews(reviews = []) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = renderTemplate({ template, styles });
  }
}

customElements.define('review-form', ReviewForm);
