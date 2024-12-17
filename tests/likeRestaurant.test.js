import RestaurantFavoriteDb from '../src/scripts/repo/restaurant-favorite-db';
import TestFactories from './factories';

describe('liking restaurant', () => {
  const _addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-container"></div>';
  };

  beforeEach(() => {
    _addFavoriteButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: '1' });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: '1' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to add the restaurant to favorite', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: '1' });

    document.querySelector('#favorite-button').dispatchEvent(new Event('click'));

    const restaurant = await RestaurantFavoriteDb.getRestaurantById('1');
    const expectedRestaurant = { id: '1' };
    expect(restaurant).toEqual(expectedRestaurant);

    await RestaurantFavoriteDb.deleteRestaurant('1');
  });

  it('should not add a restaurant to favorite when already liked', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: '1' });
    await RestaurantFavoriteDb.putRestaurant({ id: '1' });
    const favoriteButton = document.querySelector('#favorite-button');

    favoriteButton.dispatchEvent(new Event('click'));

    const restaurants = await RestaurantFavoriteDb.getRestaurants();
    const expectedRestaurants = [{ id: '1' }];
    expect(restaurants).toEqual(expectedRestaurants);
    await RestaurantFavoriteDb.deleteRestaurant('1');
  });

  it('should not add a restaurant to favorite when it has no id', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({});
    const favoriteButton = document.querySelector('#favorite-button');

    favoriteButton.dispatchEvent(new Event('click'));

    const restaurants = await RestaurantFavoriteDb.getRestaurants();
    expect(restaurants).toEqual([]);
  });
});
