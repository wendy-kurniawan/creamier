import RestaurantRepo from '../repo/restaurant-repo';
import pricings from '../data/pricings';

import '../components/hero';
import '../components/restaurant/restaurant-list';
import '../components/pricing/pricing-list';

import '../components/skeleton/heading';
import '../components/skeleton/restaurant/restaurant-list';
import '../components/skeleton/pricing/pricing-list';

const List = {
  beforeRender() {
    return `
      <restaurant-hero></restaurant-hero>
      <section id="restaurants" class="section-meals l-container">
        <skeleton-heading></skeleton-heading>
        <div id="restaurant-container">
          <skeleton-restaurant-list></skeleton-restaurant-list>
        </div>
      </section>
      <section class="section-pricing">
        <div class="section-pricing__content l-container">
          <skeleton-heading></skeleton-heading>
          <div id="pricing-container">
            <skeleton-pricing-list></skeleton-pricing-list>
          </div>
        </div>
      </section>
    `;
  },

  render() {
    return `
      <restaurant-hero></restaurant-hero>
      <section id="restaurants" class="section-meals l-container">
        <h2 class="heading-secondary">Dessert Camps</h2>
        <div id="restaurant-container">
          <skeleton-restaurant-list></skeleton-restaurant-list>
        </div>
      </section>
      <section class="section-pricing">
        <div class="section-pricing__content l-container">
          <h2 class="heading-secondary">Pricing</h2>
          <div id="pricing-container">
            <skeleton-pricing-list></skeleton-pricing-list>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurant-container');
    const { error, restaurants } = await RestaurantRepo.getRestaurants();

    if (error) {
      restaurantsContainer.innerHTML = `<error-placeholder><p slot="placeholder">${error}</p></error-placeholder>`;
      return;
    }

    if (restaurants?.length > 0) {
      restaurantsContainer.innerHTML = '';
      const restaurantList = document.createElement('restaurant-list');
      restaurantList.restaurants = restaurants;
      restaurantsContainer.appendChild(restaurantList);
    } else {
      restaurantsContainer.innerHTML = '<error-placeholder><p slot="placeholder">Restaurants Not Found</p></error-placeholder>';
    }

    const pricingContainer = document.querySelector('#pricing-container');
    const pricingList = document.createElement('pricing-list');
    pricingList.pricings = pricings;
    pricingContainer.innerHTML = '';
    pricingContainer.appendChild(pricingList);
  },
};

export default List;
