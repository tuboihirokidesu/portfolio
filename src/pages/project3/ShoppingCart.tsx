import React, { useReducer } from 'react';
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
      </CartContextProvider>
    </>
  );
};

export default ShoppingCart;
