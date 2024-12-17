import 'regenerator-runtime';

import '../styles/index.scss';
import './components/header';
import './components/footer';

import serviceWorkerRegister from './utils/sw-register';
import App from './views/app';

const app = new App({
  content: document.getElementById('main-content'),
});

app.beforeRender();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  serviceWorkerRegister();
});
