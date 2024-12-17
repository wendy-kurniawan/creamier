import ReviewFormPresenter from '../src/scripts/utils/review-form-presenter';
import ReviewFormView from '../src/scripts/utils/review-form-view';
import ReviewListView from '../src/scripts/utils/review-list-view';

describe('add customer review', () => {
  let formView;
  let reviewsView;

  const renderTemplate = () => {
    formView = new ReviewFormView();
    reviewsView = new ReviewListView();

    document.body.innerHTML = `
      <div>
        ${reviewsView.getTemplate()}
        ${formView.getTemplate()}
      </div>
    `;
  };

  beforeEach(() => {
    renderTemplate();
  });

  const createPresenter = ({ repository }) => {
    const restaurantId = '2';

    return new ReviewFormPresenter({
      formView,
      reviewsView,
      repository,
      restaurantId,
    });
  };

  describe('when initialized', () => {
    it('should show empty fields', () => {
      const form = document.querySelector('review-form').element;
      const repository = {
        saveReview: jest.fn(),
      };

      createPresenter({ repository });

      const name = form.querySelector('#name').value;
      const review = form.querySelector('#review').value;
      expect(name).toEqual('');
      expect(review).toEqual('');
    });

    it('should not show the error banner', () => {
      const form = document.querySelector('review-form').element;
      const repository = {
        saveReview: jest.fn(),
      };

      createPresenter({ repository });

      const banner = form.querySelector('ui-alert');
      expect(banner).toBeNull();
    });
  });

  describe('when fields are complete', () => {
    it('should be able to add review', () => {
      const expectedReview = {
        date: '25 April 2024',
        name: 'Name',
        review: 'Review',
      };

      const reviewList = document.querySelector('review-list');
      reviewList.addEventListener('review:updated', (done) => {
        const reviewItems = document.querySelectorAll('review-item');
        expect(reviewItems).toEqual(1);

        const reviewItem = reviewItems.item(0);
        const reviewName = reviewItem.querySelector('.review__name').textContent;
        const reviewDate = reviewItem.querySelector('.review__date').textContent;
        const reviewComment = reviewItem.querySelector('.review__comment').textContent;

        expect(reviewName, expectedReview.name);
        expect(reviewDate, expectedReview.date);
        expect(reviewComment, expectedReview.review);

        done();
      });

      const form = document.querySelector('review-form').element;
      const repository = {
        saveReview: jest.fn().mockImplementation(() => ({
          error: null,
          reviews: [expectedReview],
        })),
      };

      createPresenter({ repository });
      form.dispatchEvent(new Event('submit'));
    });
  });

  describe('when fields are empty', () => {
    it('should not be able to add review', () => {
      const form = document.querySelector('review-form').element;
      const repository = {
        saveReview: jest.fn(),
      };

      createPresenter({ repository });
      form.dispatchEvent(new Event('submit'));

      expect(repository.saveReview).not.toHaveBeenCalled();
    });
  });

  describe('when errors occurred', () => {
    it('should show the error banner', (done) => {
      const errorMessage = 'Error Message';
      const form = document.querySelector('review-form').element;
      form.querySelector('#alert-container').addEventListener('review:error', () => {
        const banner = form.querySelector('ui-alert p[slot="placeholder"]');
        expect(banner.textContent).toEqual(errorMessage);
        done();
      });

      const repository = {
        saveReview: jest.fn().mockImplementation(() => ({
          error: errorMessage,
          reviews: [],
        })),
      };

      createPresenter({ repository });

      form.querySelector('#name').value = 'Name';
      form.querySelector('#review').value = 'Review';
      form.dispatchEvent(new Event('submit'));
    });
  });
});
