import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cart";
import useStyles from "./styles";

const Navigation = () => {
  const classes = useStyles();

  const [count, setCount] = useState<number>(0);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    let _count = 0;

    for (let key in cartContext.cartState.items) {
      _count += cartContext.cartState.items[key].length;
    }

    if (_count === count) return;

    setCount(_count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartContext]);

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography
            component={Link}
            to='/portfolio/project/shopping-cart'
            variant='h6'
            className={classes.title}
            color='inherit'
          >
            fake store
          </Typography>
          <div className={classes.grow} />
          <div className={classes.menuButton}>
            <IconButton
              aria-label='Show Cart Items'
              color='inherit'
              component={Link}
              to='./shopping-cart/cart'
            >
              <Badge badgeContent={count} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navigation;

// const StyledButton = styled(IconButton)`
//   position: fixed;
//   z-index: 100;
//   right: 20px;
//   top: 10px;
// `;
