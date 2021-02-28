import React, { useContext, useEffect, useState } from 'react';
import {
  AppBar,
  Badge,
  IconButton,
  Toolbar,
  Typography,
  makeStyles,
  fade,
  Theme,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import { Link } from 'react-router-dom';
import CartContext from './cart';

const drawerWidth = 0;

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navigation = () => {
  const classes = useStyles();

  const [count, setCount] = useState<number>(0);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    let num = 0;

    // for (const key in cartContext.cartState.items) {
    //   number += cartContext.cartState.items[key].length;
    // }
    Object.keys(cartContext.cartState.items).forEach((key) => {
      num += cartContext.cartState.items[key].length;
    });

    if (num === count) return;

    setCount(num);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartContext]);

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/portfolio/project/shopping-cart"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            fake store
          </Typography>
          <div className={classes.grow} />
          <div className={classes.menuButton}>
            <IconButton
              aria-label="Show Cart Items"
              color="inherit"
              component={Link}
              to="./shopping-cart/cart"
            >
              <Badge badgeContent={count} color="secondary">
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
