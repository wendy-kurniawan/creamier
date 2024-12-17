Feature('Adding Customer Review');

Before(({ I }) => {
  I.amOnPage('/');

  I.scrollTo('section#restaurants');
  I.wait(1);

  I.seeElement('restaurant-item .meal__link');
  I.click('restaurant-item .meal__link');

  I.wait(1);
  I.scrollTo('review-form');
});

Scenario('Adding a customer review', async ({ I }) => {
  const name = 'John Doe';
  const review = 'Dummy Comment';

  I.fillField('review-form #name', name);
  I.fillField('review-form #review', review);
  I.click('review-form .button');

  I.scrollTo('review-list');
  I.see(name, 'review-item .review__name');
  I.see(review, 'review-item .review__comment');
});
