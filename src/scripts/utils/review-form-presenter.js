class ReviewFormPresenter {
  constructor({
    formView, reviewsView, restaurantId, repository,
  }) {
    this._formView = formView;
    this._reviewsView = reviewsView;
    this._restaurantId = restaurantId;
    this._repository = repository;

    this._bindReviewAdd();
  }

  _bindReviewAdd() {
    this._formView.onSubmit(async (form) => {
      const reviewFormData = new FormData(form);
      const review = Object.fromEntries(reviewFormData);
      const isReviewComplete = Object.values(review).every((value) => Boolean(value));

      if (!isReviewComplete) return;

      const reviewToAdd = {
        id: this._restaurantId,
        ...Object.fromEntries(reviewFormData),
      };

      this._formView.disable();
      const { error, reviews } = await this._repository.saveReview(reviewToAdd);
      this._formView.enable();

      if (error) {
        this._formView.showError(error);
        return;
      }

      this._reviewsView.showReviews(reviews);
      this._formView.reset();
    });
  }
}

export default ReviewFormPresenter;
