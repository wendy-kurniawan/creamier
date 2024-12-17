import RESTAURANT_ENDPOINT from '../../../repo/restaurant-endpoint';

export default function restaurantItemTemplate(restaurant) {
  return `
    <article role="listitem" class="meal card">
      <img
        class="meal__thumbnail"
        src="${RESTAURANT_ENDPOINT.IMAGE_SMALL(restaurant.pictureId)}"
        alt="${restaurant.name} restaurant"
        loading="lazy"
      />
      <div class="meal__content">
        <section class="meal__specification">
          <h3 class="meal__title">
            <a class="meal__link" href='/#/detail/${restaurant.id}'>${restaurant.name}</a>
          </h3>
          <p class="meal__description">${restaurant.description}</p>
        </section>
        <section class="meal__detail">
          <p class="meal__detail-item meal__detail-item--location">${restaurant.city}</p>
          <p class="meal__detail-item meal__detail-item--rating">${restaurant.rating} of 5</p>
        </section>
      </div>
    </article>
  `;
}
