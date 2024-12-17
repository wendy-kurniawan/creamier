import CreamierLogo from '../../../public/favicon.svg';

const headerTemplate = `
  <header class="header l-container">
    <img class="header__logo" src=${CreamierLogo} alt="Creamier" />
    <button aria-label="Toggle side drawer" class="header__menu" id="menu">
      ☰
    </button>
    <nav class="navigation" id="navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <a href="/" class="navigation__link">Home</a>
        </li>
        <li class="navigation__item">
          <a href="/#/favorite" class="navigation__link">Favorite</a>
        </li>
        <li class="navigation__item">
          <a
            href="https://www.linkedin.com/in/wendy-kurniawan"
            class="navigation__link"
            >About us</a
          >
        </li>
      </ul>
    </nav>
  </header>
`;

export default headerTemplate;
