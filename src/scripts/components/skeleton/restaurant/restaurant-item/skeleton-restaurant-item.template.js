import Placeholder from '../../../../../public/images/placeholders/placeholder.svg';

const restaurantItemTemplate = `
  <article role="listitem" class="meal skeleton">
    <img class="meal__thumbnail" src="${Placeholder}" alt="" />
    <div class="meal__content">
      <section class="meal__specification">
        <h3 class="meal__title"></h3>
        <p class="meal__description"></p>
      </section>
      <section class="meal__detail">
        <p class="meal__detail-item meal__detail-item--location"></p>
        <p class="meal__detail-item meal__detail-item--rating"></p>
      </section>
    </div>
  </article>
`;

export default restaurantItemTemplate;
