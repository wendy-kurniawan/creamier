const itActsAsFavoriteRestaurantModel = (repository) => {
  it('should return the restaurant that has been added to favorites', async () => {
    repository.putRestaurant({ id: '1' });
    repository.putRestaurant({ id: '2' });

    expect(await repository.getRestaurantById('1')).toEqual({ id: '1' });
    expect(await repository.getRestaurantById('2')).toEqual({ id: '2' });
    expect(await repository.getRestaurantById('3')).toEqual(undefined);
  });

  it('should not add a restaurant to favorite when it does not have the correct property', async () => {
    repository.putRestaurant({ wrongProperty: 'wrongProperty' });

    expect(await repository.getRestaurants()).toEqual([]);
  });

  it('should return all of the restaurants that have been added to favorites', async () => {
    repository.putRestaurant({ id: '1' });
    repository.putRestaurant({ id: '2' });

    expect(await repository.getRestaurants()).toEqual([{ id: '1' }, { id: '2' }]);
  });

  it('should be able to remove favorite restaurant', async () => {
    repository.putRestaurant({ id: '1' });
    repository.putRestaurant({ id: '2' });
    repository.putRestaurant({ id: '3' });

    await repository.deleteRestaurant('1');

    expect(await repository.getRestaurants()).toEqual([{ id: '2' }, { id: '3' }]);
  });

  it('should remove a restaurant even though restaurant has not been added to favorites', async () => {
    repository.putRestaurant({ id: '1' });
    repository.putRestaurant({ id: '2' });
    repository.putRestaurant({ id: '3' });

    await repository.deleteRestaurant('4');

    expect(await repository.getRestaurants()).toEqual([{ id: '1' }, { id: '2' }, { id: '3' }]);
  });
};

export default itActsAsFavoriteRestaurantModel;
