import { useEffect, useState } from "react";
import { ICartItem } from "../../components/project3/interfaces/item";
import { fetchShoppingData } from "../../components/project3/api/index";
import {
  Container,
  createStyles,
  Grid,
  LinearProgress,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { ShopItem } from "../../components/project3";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
    root: {
      flexGrow: 1,
    },
  })
);

const Shop = () => {
  const classes = useStyles();
  const [data, setData] = useState([] as ICartItem[]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      setData(await fetchShoppingData());
      setIsLoading(false);
    };
    fetchAPI();
  }, []);

  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container justify='center' spacing={4}>
            {data.map((item, i) => (
              <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                <ShopItem item={item} />
              </Grid>
            ))}
          </Grid>
        </main>
      )}
    </>
  );
};

export default Shop;
