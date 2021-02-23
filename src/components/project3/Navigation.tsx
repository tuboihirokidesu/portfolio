import { Badge, IconButton, Paper, Tab, Tabs } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useContext, useEffect, useState } from "react";
import { Link, Route, useLocation } from "react-router-dom";
import styled from "styled-components";
import CartContext from "./context/cart";

const Navigation = () => {
  const [count, setCount] = useState<number>(0);
  const location = useLocation();
  const cartContext = useContext(CartContext);
  useEffect(() => {
    let _count = 0;

    for (let key in cartContext.cartState.items) {
      _count += cartContext.cartState.items[key].length;
    }

    if (_count === count) return;

    setCount(_count);
  }, [cartContext]);
  return (
    <>
      <Paper
        square
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <Tabs
          value={location.pathname} //valueを指定していないとactivetabにスタイリングしない。
          indicatorColor='primary'
          textColor='primary'
          aria-label='disabled tabs example'
        >
          <Tab
            label='Shop'
            value='/portfolio/project/shopping-cart'
            component={Link}
            to='/portfolio/project/shopping-cart'
          />
          <Tab label='' disabled />
          <Tab
            label='Cart'
            value='/portfolio/project/shopping-cart/cart'
            component={Link}
            to='/portfolio/project/shopping-cart/cart'
          />
        </Tabs>
        <StyledButton>
          {count > 0 && (
            <Badge badgeContent={count} color='secondary'>
              <AddShoppingCartIcon />
            </Badge>
          )}
        </StyledButton>
      </Paper>
    </>
  );
};

export default Navigation;

const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 10px;
`;
