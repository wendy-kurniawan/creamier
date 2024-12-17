import RESTAURANT_ENDPOINT from '../../repo/restaurant-endpoint';

export default function template({ restaurant, formView, reviewsView }) {
  return `
    <section class="detail__information">
      <picture>
        <source media="(min-width: 1201px)" srcset="${RESTAURANT_ENDPOINT.IMAGE_SMALL(restaurant.pictureId)}">
        <source media="(min-width: 901px)" srcset="${RESTAURANT_ENDPOINT.IMAGE_LARGE(restaurant.pictureId)}">
        <source media="(min-width: 601px)" srcset="${RESTAURANT_ENDPOINT.IMAGE_MEDIUM(restaurant.pictureId)}">
        <img class="detail__image" src="${RESTAURANT_ENDPOINT.IMAGE_SMALL(restaurant.pictureId)}" alt="${restaurant.name} restaurant">
      </picture>
      <div class="detail__breakdown">
        <h1 class="detail__name">${restaurant.name}</h1>
        <address class="detail__address"><span class="detail__street">${restaurant.address}</span>, <span class="detail__city">${restaurant.city}</span></address>
        <p class="detail__rating">${restaurant.rating} out of 5</p>
        <ul class="detail__category">
          ${restaurant.categories.map((category) => `<li class="detail__category-item">${category.name}</li>`).join('')}
        </ul>
        <div id="favorite-container"></div>
      </div>
    </section>
    <section class="detail__overview">
      <h2 class="heading-secondary">Overview</h2>
      <p class="detail__description">${restaurant.description}</p>
    </section>
    <section class="detail__menu">
      <h2 class="heading-secondary">Our Best Menu</h2>
      <p>Indulge in a delightful array of sweet treats at our dessert restaurant's menu. Each dessert is carefully crafted with the finest ingredients to ensure a memorable and delicious dining experience. Treat yourself to a taste of heaven with our exquisite dessert menu.</p>
      <div class="content">
        <section class="menu foods">
          <h3 class="menu__heading">Foods</h3>
          <ul class="menu__list">
            ${restaurant.menus.foods.map((food) => `<li class="menu__item">${food.name}</li>`).join('')}
          </ul>
        </section>
        <section class="menu drinks">
          <h3 class="menu__heading">Drinks</h3>
          <ul class="menu__list">
            ${restaurant.menus.drinks.map((drink) => `<li class="menu__item">${drink.name}</li>`).join('')}
          </ul>
        </section>
      </div>
    </section>
    <section class="detail__reviews">
      <h2 class="heading-secondary">Our Customer Reviews</h2>
      ${reviewsView.getTemplate()}
    </section>
    <section class="detail__form">
      <h2 class="heading-secondary">Any Feedback to Us</h2>
      ${formView.getTemplate()}
    </section>
  `;
}
