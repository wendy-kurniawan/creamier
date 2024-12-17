import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.url();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    window.scrollTo(0, 0);

    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.querySelector('#main-content');

    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.scrollIntoView({ behavior: 'smooth' });
      skipLink.blur();
    });
  }

  beforeRender() {
    const url = UrlParser.url();
    const page = routes[url];

    if (page?.beforeRender?.()) {
      this._content.innerHTML = page.beforeRender();
    }
  }
}

export default App;
