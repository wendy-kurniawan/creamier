import Placeholder from '../../../../public/images/placeholders/placeholder.svg';
import '../heading';
import '../review/review-list';
import '../review/review-form';

const skeletonDetailTemplate = `
  <section class="detail__information">
    <img
      class="detail__image"
      src="${Placeholder}"
      alt=""
      width="100%"
      height="280px"
    />
    <div class="detail__breakdown">
      <h1 class="detail__name"></h1>
      <address class="detail__address"></address>
      <p class="detail__rating"></p>
      <ul class="detail__category">
        <li class="detail__category-item"></li>
      </ul>
      <div id="favorite-container"></div>
    </div>
  </section>
  <section class="detail__overview">
    <skeleton-heading></skeleton-heading>
    <p class="detail__description"></p>
  </section>
  <section class="detail__menu">
    <skeleton-heading></skeleton-heading>
    <p></p>
    <div class="content">
      <section class="menu"></section>
      <section class="menu"></section>
    </div>
  </section>
  <section class="detail__reviews">
    <skeleton-heading></skeleton-heading>
    <skeleton-review-list></skeleton-review-list>
  </section>
  <section class="detail__form">
    <skeleton-heading></skeleton-heading>
    <skeleton-review-form></skeleton-review-form>
  </section>
`;

export default skeletonDetailTemplate;
