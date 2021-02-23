import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import CartContext from "./context/cart";
import { ICartItem } from "./interfaces/item";

const useStyles = makeStyles({
  root: {
    width: 300,
    margin: "10px",
  },
  media: {
    height: 140,
  },
});

type Prop = {
  item: ICartItem;
  quantity: number;
};

const CartItem: React.FC<Prop> = ({ item, quantity }) => {
  const classes = useStyles();
  const cartContext = useContext(CartContext);
  return (
    <Card variant='outlined' className={classes.root}>
      <CardContent>
        <Typography color='textSecondary' gutterBottom>
          {item.title}*{quantity}
        </Typography>
        <br />
        {`Price : ${(item.price * quantity * 100).toFixed(0)}円`}
      </CardContent>
      <CardActions>
        <Button
          size='small'
          onClick={() => {
            cartContext.cartDispatch({ type: "remove_item", payload: item });
          }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
