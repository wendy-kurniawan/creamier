import { createLikeButtonTemplate, createLikedButtonTemplate } from './favorite-button.template';

const FavoriteButtonPresenter = {
  async init({ container, repository, restaurant }) {
    this._container = container;
    this._repository = repository;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._repository.getRestaurantById(id);
    return Boolean(restaurant);
  },

  _renderLike() {
    this._container.innerHTML = createLikeButtonTemplate();

    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await this._repository.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._container.innerHTML = createLikedButtonTemplate();

    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await this._repository.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
