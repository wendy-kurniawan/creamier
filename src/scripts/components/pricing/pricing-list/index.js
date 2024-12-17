import renderTemplate from '../../../shared/template-creator';
import styles from './pricing-list.module.scss';
import '../pricing-item';

class PricingList extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._pricings = [];
  }

  set pricings(pricings = []) {
    this._pricings = pricings;
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = renderTemplate({ styles });

    const pricingItems = document.createDocumentFragment();
    this._pricings.forEach((pricing) => {
      const pricingItem = document.createElement('pricing-item');
      pricingItem.pricing = pricing;
      pricingItems.appendChild(pricingItem);
    });

    const pricingList = document.createElement('div');
    pricingList.setAttribute('role', 'list');
    pricingList.classList.add('pricings');
    pricingList.appendChild(pricingItems);
    this._shadowRoot.appendChild(pricingList);
  }
}

customElements.define('pricing-list', PricingList);
