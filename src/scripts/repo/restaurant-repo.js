import RESTAURANT_ENDPOINT from './restaurant-endpoint';

const defaultErrorMessage = 'Oops, sorry! There is a problem in the network. Please refresh to try again.';

class RestaurantRepo {
  static async getRestaurants() {
    try {
      const response = await fetch(RESTAURANT_ENDPOINT.LIST);
      const responseJson = await response.json();
      return { error: null, restaurants: responseJson.restaurants };
    } catch (_) {
      return { error: defaultErrorMessage, restaurants: [] };
    }
  }

  static async getRestaurantById(id) {
    try {
      const response = await fetch(RESTAURANT_ENDPOINT.DETAIL(id));
      const responseJson = await response.json();
      return { error: null, restaurant: responseJson.restaurant };
    } catch (_) {
      return { error: defaultErrorMessage, restaurant: null };
    }
  }

  static async saveReview(review) {
    try {
      const response = await fetch(RESTAURANT_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review),
      });
      const responseJson = await response.json();
      return { error: null, reviews: responseJson.customerReviews };
    } catch (_) {
      return { error: defaultErrorMessage, reviews: [] };
    }
  }
}

export default RestaurantRepo;
