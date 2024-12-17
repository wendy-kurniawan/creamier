import renderTemplate from '../../../shared/template-creator';
import template from './skeleton-favorite-list.template.html';
import styles from './skeleton-favorite-list.module.scss';

class SkeletonFavoriteList extends HTMLElement {
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

customElements.define('skeleton-favorite-list', SkeletonFavoriteList);
