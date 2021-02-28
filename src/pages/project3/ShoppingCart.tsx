import React, { useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import shoppingRoutes from 'config/shoppingRoutes';
import {
  CartContextProvider,
  cartReducer,
  initialCartState,
} from 'components/project3/cart';
import { Navigation } from 'components/project3';

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
          {shoppingRoutes.map((route) => (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </CartContextProvider>
    </>
  );
};

export default ShoppingCart;
