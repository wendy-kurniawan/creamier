import renderTemplate from '../../shared/template-creator';

import RestaurantRepo from '../../repo/restaurant-repo';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import ReviewFormPresenter from '../../utils/review-form-presenter';
import ReviewFormView from '../../utils/review-form-view';
import ReviewListView from '../../utils/review-list-view';
import RestaurantFavoriteDb from '../../repo/restaurant-favorite-db';
import template from './detail.template';
import './detail.scss';
import '../../components/error';
import '../../components/skeleton/detail';

const Detail = {
  beforeRender() {
    return `
      <article id="restaurant-detail" class="detail">
        <div class="content l-container">
          <skeleton-detail></skeleton-detail>
        </div>
      </article>
    `;
  },

  render() {
    return `
      <article id="restaurant-detail" class="detail">
        <div class="content l-container">
          <skeleton-detail></skeleton-detail>
        </div>
      </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.urlComponent();
    const detailContainer = document.querySelector('.detail .content');
    const { error, restaurant } = await RestaurantRepo.getRestaurantById(url.id);

    if (error) {
      detailContainer.innerHTML = `<error-placeholder><p slot="placeholder">${error}</p></error-placeholder>`;
      return;
    }

    const formView = new ReviewFormView();
    const reviewsView = new ReviewListView();
    if (restaurant) {
      detailContainer.innerHTML = renderTemplate({
        template: template({ restaurant, formView, reviewsView }),
      });
    } else {
      detailContainer.innerHTML = '<error-placeholder><p slot="placeholder">Restaurant Not Found</p></error-placeholder>';
      return;
    }

    const reviewList = document.querySelector('review-list');
    reviewList.reviews = restaurant.customerReviews;

    FavoriteButtonPresenter.init({
      container: document.getElementById('favorite-container'),
      repository: RestaurantFavoriteDb,
      restaurant,
    });

    new ReviewFormPresenter({
      formView,
      reviewsView,
      repository: RestaurantRepo,
      restaurantId: restaurant.id,
    });
  },
};

export default Detail;
