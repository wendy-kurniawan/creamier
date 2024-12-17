const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing no favorite restaurants', ({ I }) => {
  const errorPlaceholder = 'error-placeholder > p[slot="placeholder"]';
  I.see('Restaurant Not Found', errorPlaceholder);
});

Scenario('liking a restaurant', async ({ I }) => {
  const errorPlaceholder = 'error-placeholder > p[slot="placeholder"]';
  I.see('Restaurant Not Found', errorPlaceholder);

  I.amOnPage('/');

  I.scrollTo('section#restaurants');
  I.wait(1);

  I.seeElement('restaurant-item .meal__link');
  const firstRestaurantTitle = await I.executeScript(() => document.querySelector('restaurant-list')
    .shadowRoot.querySelector('restaurant-item')
    .shadowRoot.querySelector('.meal__link')
    .textContent);

  I.click('restaurant-item .meal__link');

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const favoriteRestaurantTitle = await I.executeScript(() => document.querySelector('favorite-restaurant-list')
    .shadowRoot.querySelector('restaurant-item')
    .shadowRoot.querySelector('.meal__link')
    .textContent);

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});
