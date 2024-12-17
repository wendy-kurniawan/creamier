import RestaurantFavoriteDb from '../src/scripts/repo/restaurant-favorite-db';
import TestFactories from './factories';

describe('unliking restaurant', () => {
  const _addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-container"></div>';
  };

  beforeEach(async () => {
    _addFavoriteButtonContainer();
    await RestaurantFavoriteDb.putRestaurant({ id: '1' });
  });

  afterEach(async () => {
    await RestaurantFavoriteDb.deleteRestaurant('1');
  });

  it('should show unlike button when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: '1' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not show like button when the restaurant has been liked', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: '1' });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should remove liked restaurant from the favorites', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: '1' });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    const restaurants = await RestaurantFavoriteDb.getRestaurants();
    const expectedRestaurants = [];
    expect(restaurants).toEqual(expectedRestaurants);
  });

  it('should not throw error when clicking unlike button when the unliked movie is not in the favorites', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: '1' });

    await RestaurantFavoriteDb.deleteRestaurant('1');

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    const restaurants = await RestaurantFavoriteDb.getRestaurants();
    const expectedRestaurants = [];
    expect(restaurants).toEqual(expectedRestaurants);
  });
});
