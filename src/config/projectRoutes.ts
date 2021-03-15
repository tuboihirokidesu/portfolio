import Project from 'pages/Project';
import NoughtsAndCrosses from 'pages/project1/NoughtsAndCrosses';
import Corona from 'pages/project2/Corona';
import Cart from 'pages/project3/Cart';
import Shop from 'pages/project3/Shop';
import Calender from 'pages/project4/Calrender';
import { IRoute } from './Interfaces';

const projectRoutes: IRoute[] = [
  {
    id: '0',
    path: '/',
    name: 'Project Page',
    component: Project,
    exact: true,
  },
  {
    id: '1',
    path: '/noughts-and-crosses',
    name: 'noughts-and-crosses',
    component: NoughtsAndCrosses,
    exact: false,
  },
  {
    id: '2',
    path: '/corona',
    name: 'corona',
    component: Corona,
    exact: false,
  },
  {
    id: '3',
    path: '/shopping-cart',
    name: 'shopping-cart',
    component: Shop,
    exact: false,
  },
  {
    id: '4',
    path: '/shopping-cart/cart',
    name: 'shopping-cart/cart',
    component: Cart,
    exact: false,
  },

  {
    id: '5',
    path: '/calender',
    name: 'calender',
    component: Calender,
    exact: false,
  },
];

export default projectRoutes;
