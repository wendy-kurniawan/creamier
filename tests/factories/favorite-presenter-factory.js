import RestaurantFavoriteDb from '../../src/scripts/repo/restaurant-favorite-db';
import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    container: document.getElementById('favorite-container'),
    repository: RestaurantFavoriteDb,
    restaurant,
  });
};

export default createFavoriteButtonPresenterWithRestaurant;
