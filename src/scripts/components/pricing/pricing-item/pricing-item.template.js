export default function pricingItemTemplate(pricing) {
  return `
    <article role="listitem" class="pricing card">
      <h3 class="pricing__plan">${pricing.plan}</h3>
      <p class="pricing__price">$${pricing.price}</p>
      <ul class="pricing__package-list">
        ${pricing.packages.map((pack) => `<li class="pricing__package-item">${pack}</li>`).join('')}
      </ul>
      <a class="button" href="#restaurants">Eat now</a>
    </article>
  `;
}
