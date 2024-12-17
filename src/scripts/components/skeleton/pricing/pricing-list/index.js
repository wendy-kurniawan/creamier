import renderTemplate from '../../../../shared/template-creator';
import styles from './skeleton-pricing-list.module.scss';
import '../pricing-item';

class SkeletonPricingList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._pricings = [];
  }

  connectedCallback() {
    this._pricings = new Array(3).fill(null);
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = renderTemplate({ styles });

    const pricingItems = document.createDocumentFragment();
    this._pricings.forEach(() => {
      const pricingItem = document.createElement('skeleton-pricing-item');
      pricingItems.appendChild(pricingItem);
    });

    const pricingList = document.createElement('div');
    pricingList.setAttribute('role', 'list');
    pricingList.classList.add('pricings');
    pricingList.appendChild(pricingItems);
    this._shadowRoot.appendChild(pricingList);
  }
}

customElements.define('skeleton-pricing-list', SkeletonPricingList);
