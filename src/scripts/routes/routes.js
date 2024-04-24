import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Restaurant from '../views/pages/restaurants';

const routes = {
  '/': Restaurant, // default Page
  '/restaurant': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
