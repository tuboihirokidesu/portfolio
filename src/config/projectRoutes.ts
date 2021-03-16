import Project from 'pages/Project';
import NoughtsAndCrosses from 'pages/project1/NoughtsAndCrosses';
import Corona from 'pages/project2/Corona';
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
    path: '/calender',
    name: 'calender',
    component: Calender,
    exact: false,
  },
];

export default projectRoutes;
