import Cart from 'pages/project3/Cart';
import Shop from 'pages/project3/Shop';
import { IRoute } from './Interfaces';

const shoppingRoutes: IRoute[] = [
  {
    id: '0',
    path: '/portfolio/project/shopping-cart',
    name: 'shopping-cart',
    component: Shop,
    exact: true,
  },
  {
    id: '1',
    path: '/portfolio/project/shopping-cart/cart',
    name: 'shopping-cart/cart',
    component: Cart,
    exact: true,
  },
];

export default shoppingRoutes;
