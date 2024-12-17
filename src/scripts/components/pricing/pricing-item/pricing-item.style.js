import IceCreamIcon from '../../../../public/images/icons/ice-cream.svg';

const pricingItemStyle = `
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
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

  .button {
    cursor: pointer;
    border: none;
    display: inline-block;
    color: var(--white);
    background-color: var(--orange-300);
    border-radius: var(--radius-capsule);
    text-align: center;
    font-size: 2.4rem;
    padding: 1rem 4rem;
    transition: background-color 0.25s ease-in;
  }

  .button:hover,
  .button:active {
    background-color: var(--orange-400);
  }

  .pricing {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    width: 100%;
    padding: 6rem;
    border-top: 1.5rem solid transparent;
    border-bottom: 1rem solid transparent;
  }

  .pricing--recommended {
    border-top: 1.5rem solid var(--orange-200);
    border-bottom: 1rem solid var(--orange-200);
  }

  .pricing__plan {
    color: var(--orange-300);
    font-size: 2.4rem;
    font-weight: var(--font-bold);
    text-transform: uppercase;
  }

  .pricing__price {
    color: var(--black-200);
    font-size: 4.8rem;
    font-weight: var(--font-bold);
  }

  .pricing__package-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    list-style: none;
  }

  .pricing__package-item {
    font-size: 2rem;
  }

  .pricing__package-item::before {
    content: url("${IceCreamIcon}");
    vertical-align: middle;
    margin-right: 0.75rem;
  }

  @media only screen and (min-width: 901px) {
    .pricing__plan {
      font-size: 2rem;
    }
  }
`;

export default pricingItemStyle;
