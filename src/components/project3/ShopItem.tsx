import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import styled from "styled-components";
import CartContext from "./context/cart";
import { ICartItem } from "./interfaces/item";

const useStyles = makeStyles({
  root: {
    marginTop: "20px",
    width: 300,
    height: 340,
    margin: "10px",
  },
  media: {
    height: 170,
  },
  title: {
    height: 200,
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
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.image}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Typography variant='subtitle2' gutterBottom>
            {item.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardWrap>
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
      </CardWrap>
    </Card>
  );
};

export default ShopItem;

const CardWrap = styled(CardActions)`
  display: flex;
  justify-content: center;
`;
