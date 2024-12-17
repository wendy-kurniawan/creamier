import renderTemplate from '../../../shared/template-creator';
import template from './pricing-item.template';
import styles from './pricing-item.style';

class PricingItem extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  set pricing(pricing) {
    this._pricing = pricing;
    this.render();
  }

  render() {
    const pricing = this._pricing;
    this._shadowRoot.innerHTML = renderTemplate({ template: template(pricing), styles });
  }
}

customElements.define('pricing-item', PricingItem);
