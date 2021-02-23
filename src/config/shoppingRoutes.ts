import Cart from "../pages/project3/Cart";
import Shop from "../pages/project3/Shop";
import { IRoute } from "./Interfaces";

export const shoppingRoutes: IRoute[] = [
  {
    path: "/portfolio/project/shopping-cart",
    name: "shopping-cart",
    component: Shop,
    exact: true,
  },
  {
    path: "/portfolio/project/shopping-cart/cart",
    name: "shopping-cart/cart",
    component: Cart,
    exact: true,
  },
];
