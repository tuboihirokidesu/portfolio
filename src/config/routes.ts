import Home from 'pages/Home';
import Article from 'pages/Article';
import { IRoute } from './Interfaces';

const routes: IRoute[] = [
  {
    id: '0',
    path: '/portfolio',
    name: 'Home Page',
    component: Home,
    exact: true,
  },
  {
    id: '1',
    path: '/portfolio/article',
    name: 'Article Page',
    component: Article,
    exact: true,
  },
];

export default routes;
