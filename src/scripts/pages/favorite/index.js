import RestaurantFavoriteDb from '../../repo/restaurant-favorite-db';
import '../../components/restaurant/favorite-restaurant-list';
import '../../components/loader';
import '../../components/error';
import '../../components/skeleton/favorite-list';
import '../../components/skeleton/heading';
import './favorite.scss';

const Favorite = {
  beforeRender() {
    return `
      <section id="favorite" class="section-meals section-meals--favorite">
        <div class="content l-container">
          <skeleton-heading></skeleton-heading>
          <div id="favorite-restaurant-container">
            <skeleton-favorite-list></skeleton-favorite-list>
          </div>
        </div>
      </section>
    `;
  },

  render() {
    return `
      <section id="favorite" class="section-meals section-meals--favorite">
        <div class="content l-container">
          <h2 class="heading-secondary">Favorite Dessert Camps</h2>
          <div id="restaurant-container">
            <skeleton-favorite-list></skeleton-favorite-list>
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurant-container');
    restaurantsContainer.innerHTML = '<ui-loader></ui-loader>';
    const restaurants = await RestaurantFavoriteDb.getRestaurants();
    if (restaurants?.length > 0) {
      restaurantsContainer.classList.remove('error');
      restaurantsContainer.innerHTML = '';
      const restaurantList = document.createElement('favorite-restaurant-list');
      restaurantList.restaurants = restaurants;
      restaurantsContainer.appendChild(restaurantList);
    } else {
      restaurantsContainer.classList.add('error');
      restaurantsContainer.innerHTML = '<error-placeholder><p slot="placeholder">Restaurant Not Found</p></error-placeholder>';
    }
  },
};

export default Favorite;
