import itActsAsFavoriteRestaurantModel from './contracts/favorite-restaurant-contract';
import RestaurantFavoriteDb from '../src/scripts/repo/restaurant-favorite-db';

describe('Favorite Restaurant Database Contract Test Implementation', () => {
  afterEach(async () => {
    (await RestaurantFavoriteDb.getRestaurants()).forEach(async (restaurant) => {
      await RestaurantFavoriteDb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestaurantModel(RestaurantFavoriteDb);
});
