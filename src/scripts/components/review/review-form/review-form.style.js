const reviewFormStyle = `
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

  .button:disabled {
    background-color: var(--grey-400);
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  }

  .form__input,
  .form__textarea {
    font-family: inherit;
    width: 100%;
    padding: 1.5rem;
    font-size: 1.8rem;
    outline: 1px solid var(--white-200);
    border: 1px solid var(--white-200);
    transition: outline 0.15s ease-in, border 0.15s ease-in;
  }

  .form__input:focus,
  .form__textarea:focus {
    outline: 1px solid var(--orange-300);
    border: 1px solid var(--orange-300);
  }
`;

export default reviewFormStyle;
