import { useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import {
  CartContextProvider,
  cartReducer,
  initialCartState,
} from "../../components/project3/context/cart";
import { Navigation } from "../../components/project3";
import { shoppingRoutes } from "../../config/shoppingRoutes";

const ShoppingCart = () => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const cartContextValues = {
    cartState,
    cartDispatch,
  };
  return (
    <>
      <CartContextProvider value={cartContextValues}>
        <Navigation />
        <Switch>
          {shoppingRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </CartContextProvider>
    </>
  );
};

export default ShoppingCart;
