import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Result from "../pages/contact/Result";
import Step2 from "../pages/contact/Step2";
import NoughtsAndCrosses from "../pages/project1/NoughtsAndCrosses";
import Corona from "../pages/project2/Corona";

export type IRoute = {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
};

const routes: IRoute[] = [
  {
    path: "/portfolio",
    name: "Home Page",
    component: Home,
    exact: true,
  },
  {
    path: "/portfolio/about",
    name: "about",
    component: About,
    exact: true,
  },
  {
    path: "/portfolio/project",
    name: "Project Page",
    component: Project,
    exact: true,
  },
  {
    path: "/portfolio/contact",
    name: "Contact Page",
    component: Contact,
    exact: true,
  },
  {
    path: "/portfolio/contact/step2",
    name: "Contact Page",
    component: Step2,
    exact: true,
  },
  {
    path: "/portfolio/contact/result",
    name: "Contact Page",
    component: Result,
    exact: true,
  },
  {
    path: "/portfolio/project/noughts-and-crosses",
    name: "noughts-and-crosses",
    component: NoughtsAndCrosses,
    exact: true,
  },
  {
    path: "/portfolio/project/corona",
    name: "corona",
    component: Corona,
    exact: true,
  },
];

export default routes;
