import Detail from '../pages/detail';
import Favorite from '../pages/favorite';
import List from '../pages/list';

const routes = {
  '/': List,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
