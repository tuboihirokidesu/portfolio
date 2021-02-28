import { createContext } from 'react';
import ICartItem from './item';

export interface ICartActions {
  type: 'add_item' | 'remove_item';
  payload: ICartItem;
}

export interface ICartState {
  items: { [key: string]: ICartItem[] };
}

export const initialCartState: ICartState = {
  items: {},
};

export const cartReducer = (state: ICartState, action: ICartActions) => {
  const item = action.payload;
  const items = { ...state.items };
  switch (action.type) {
    case 'add_item':
      if (items[item.title]) {
        items[item.title].push(item);
      } else {
        items[item.title] = [item];
      }

      return { ...state, items };
    case 'remove_item':
      items[item.title].pop();

      if (items[item.title].length === 0) delete items[item.title];

      return { ...state, items };
    default:
      return state;
  }
};

export interface ICartProps {
  cartState: ICartState;
  cartDispatch: React.Dispatch<ICartActions>;
}

const CartContext = createContext<ICartProps>({
  cartState: initialCartState,
  cartDispatch: () => {},
});

export const CartContextConsumer = CartContext.Consumer;
export const CartContextProvider = CartContext.Provider;

export default CartContext;
