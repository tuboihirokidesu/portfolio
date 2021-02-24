import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { useContext } from "react";
import styled from "styled-components";
import CartContext from "./context/cart";
import { ICartItem } from "./interfaces/item";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    heigt: "300px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },

  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  subtitle: {
    width: "20ch",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
});

type Props = {
  item: ICartItem;
};

const ShopItem: React.FC<Props> = ({ item }) => {
  const classes = useStyles();
  const cartContext = useContext(CartContext);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={item.image}
        title='Contemplative Reptile'
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant='body1' gutterBottom>
            {item.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {item.price}
          </Typography>
        </div>

        <Typography
          variant='subtitle2'
          color='textSecondary'
          className={classes.subtitle}
        >
          {item.description}
        </Typography>
      </CardContent>
      {/* <CardWrap>
        <Button
          size='small'
          style={{
            color: "#fff",
            border: "1px solid #16c1df",
            backgroundColor: "#16c1df",
          }}
          onClick={() => {
            cartContext.cartDispatch({ type: "add_item", payload: item });
          }}
        >
          カートに入れる
        </Button>
      </CardWrap> */}
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label='Add to Cart'
          onClick={() => {
            cartContext.cartDispatch({ type: "add_item", payload: item });
          }}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ShopItem;

const CardWrap = styled(CardActions)`
  display: flex;
  justify-content: center;
`;
