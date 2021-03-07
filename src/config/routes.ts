import Home from 'pages/Home';
import Article from 'pages/Article';
import Project from 'pages/Project';
import NoughtsAndCrosses from 'pages/project1/NoughtsAndCrosses';
import Corona from 'pages/project2/Corona';
import Calender from 'pages/project4/Calrender';
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
  {
    id: '2',
    path: '/portfolio/project',
    name: 'Project Page',
    component: Project,
    exact: true,
  },
  {
    id: '3',
    path: '/portfolio/project/noughts-and-crosses',
    name: 'noughts-and-crosses',
    component: NoughtsAndCrosses,
    exact: true,
  },
  {
    id: '4',
    path: '/portfolio/project/corona',
    name: 'corona',
    component: Corona,
    exact: true,
  },
  {
    id: '5',
    path: '/portfolio/project/calender',
    name: 'calender',
    component: Calender,
    exact: true,
  },
];

export default routes;
