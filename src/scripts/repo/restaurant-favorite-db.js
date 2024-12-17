import { openDB } from 'idb';
import CONFIG from './config';

const { DATABASE_NAME, DATABASE_VERSION, DATABASE_OBJECT } = CONFIG;
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(DATABASE_OBJECT, { keyPath: 'id' });
  },
});

const RestaurantFavoriteDb = {
  getRestaurants: async () => (await dbPromise).getAll(DATABASE_OBJECT),
  getRestaurantById: async (id) => {
    if (!id) return null;
    return (await dbPromise).get(DATABASE_OBJECT, id);
  },
  putRestaurant: async (restaurant) => {
    if (!('id' in restaurant)) return null;
    return (await dbPromise).put(DATABASE_OBJECT, restaurant);
  },
  deleteRestaurant: async (id) => {
    if (!id) return null;
    return (await dbPromise).delete(DATABASE_OBJECT, id);
  },
};

export default RestaurantFavoriteDb;
