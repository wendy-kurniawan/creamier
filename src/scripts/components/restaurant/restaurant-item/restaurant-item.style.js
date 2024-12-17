import LocationSvg from '../../../../public/images/icons/location.svg';
import StarSvg from '../../../../public/images/icons/star.svg';

const restaurantItemStyle = `
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  img {
    display: block;
  }

  button,
  a {
    min-width: 44px;
    min-height: 44px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
  }

  .card {
    background-color: var(--white);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    overflow: hidden;
  }

  .meal__thumbnail {
    width: 100%;
    height: 22rem;
    object-fit: cover;
    object-position: center;
    background-color: var(--grey-200);
  }

  .meal__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5rem;
    padding: 2.5rem;
  }

  .meal__link {
    color: inherit;
    transition: color 0.25s ease-in;
  }

  .meal__link:hover,
  .meal__link:active {
    color: var(--orange-300);
  }

  .meal__title {
    margin-bottom: 1rem;
    font-size: 2.4rem;
    font-weight: var(--font-semi-bold);
  }

  .meal__description {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .meal__detail {
    display: flex;
    justify-content: space-between;
  }

  .meal__detail-item::before {
    content: "";
    display: inline;
    vertical-align: middle;
    margin-right: 1rem;
  }

  .meal__detail-item--location::before {
    content: url("${LocationSvg}");
  }

  .meal__detail-item--rating::before {
    content: url("${StarSvg}");
  }
`;

export default restaurantItemStyle;
