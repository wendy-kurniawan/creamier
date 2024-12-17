import '../components/review/review-list';

class ReviewListView {
  getTemplate() {
    return `
      <review-list></review-list>
    `;
  }

  showReviews(reviews = []) {
    const reviewList = document.querySelector('review-list');
    reviewList.reviews = reviews;

    reviewList.dispatchEvent(new Event('review:updated'));
  }
}

export default ReviewListView;
