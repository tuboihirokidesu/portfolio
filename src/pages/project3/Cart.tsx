import { Container, Grid } from "@material-ui/core";
import { useContext } from "react";
import styled from "styled-components";
import CartItem from "../../components/project3/CartItem";
import CartContext from "../../components/project3/context/cart";

const Cart = () => {
  const cartContext = useContext(CartContext);
  return (
    <>
      <Container>
        <Wrap>
          {Object.keys(cartContext.cartState.items).length > 0 ? (
            <div>
              {Object.keys(cartContext.cartState.items).map((value, index) => {
                let _items = cartContext.cartState.items[value];

                if (_items.length > 0) {
                  return (
                    <CartItem
                      key={index}
                      item={_items[0]}
                      quantity={_items.length}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          ) : (
            <p>カートが空です。</p>
          )}
        </Wrap>
      </Container>
    </>
  );
};

export default Cart;

const Wrap = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
