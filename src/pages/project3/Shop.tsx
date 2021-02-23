import { useEffect, useState } from "react";
import { ICartItem } from "../../components/project3/interfaces/item";
import { fetchShoppingData } from "../../components/project3/api/index";
import { Container, Grid, LinearProgress } from "@material-ui/core";
import ShopItem from "../../components/project3/ShopItem";

const Shop = () => {
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
        <Grid container justify='center'>
          {data.map((item, i) => (
            <ShopItem item={item} key={i} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default Shop;
