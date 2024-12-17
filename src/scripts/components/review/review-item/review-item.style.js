const reviewItemStyle = `
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

  .review__item {
    padding: 4rem;
    border: 1px solid var(--orange-180);
    background-color: var(--white);
  }

  .review__name {
    font-size: 2rem;
    font-weight: var(--font-semi-bold);
    margin-bottom: 0.5rem;
  }

  .review__date {
    font-size: 1.6rem;
    color: var(--white-400);
  }

  .review__comment {
    margin: 2rem 0;
  }

  .review__comment::before,
  .review__comment::after {
    content: '"';
    font-style: italic;
  }
`;

export default reviewItemStyle;
