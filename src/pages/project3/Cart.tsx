import React, { useContext } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { CartItem } from 'components/project3';
import CartContext from 'components/project3/cart';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '10%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardItem: {
    display: 'flex',
  },
}));

const Cart = () => {
  const cartContext = useContext(CartContext);
  const classes = useStyles();
  return (
    <>
      <Container>
        <div className={classes.toolbar}>
          <Typography className={classes.title} variant="h3" gutterBottom>
            Your Shopping Cart
          </Typography>
          {Object.keys(cartContext.cartState.items).length > 0 ? (
            <>
              <Grid container spacing={3} className={classes.cardItem}>
                {Object.keys(cartContext.cartState.items).map((value) => {
                  const items = cartContext.cartState.items[value];

                  if (items.length > 0) {
                    return (
                      <CartItem
                        key={value}
                        item={items[0]}
                        quantity={items.length}
                      />
                    );
                  }
                  return null;
                })}
              </Grid>
            </>
          ) : (
            <p>カートが空です。</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default Cart;
