import React, { useContext } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import CartContext from './cart';
import ICartItem from './item';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    heigt: '300px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  subtitle: {
    width: '20ch',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
});

type Props = {
  item: ICartItem;
};

const ShopItem = ({ item }: Props) => {
  const classes = useStyles();
  const cartContext = useContext(CartContext);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.image}
        title="Contemplative Reptile"
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="body1" gutterBottom>
            {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.price}
          </Typography>
        </div>

        <Typography
          variant="subtitle2"
          color="textSecondary"
          className={classes.subtitle}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => {
            cartContext.cartDispatch({ type: 'add_item', payload: item });
          }}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ShopItem;

// const CardWrap = styled(CardActions)`
//   display: flex;
//   justify-content: center;
// `;
