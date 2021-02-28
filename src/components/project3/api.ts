import axios from 'axios';
import ICartItem from './item';

const url = 'https://fakestoreapi.com/products';

const fetchShoppingData = async (): Promise<ICartItem[]> => {
  try {
    const { data } = await axios.get<ICartItem[]>(url);
    return data.map((item) => ({
      category: item.category,
      description: item.description,
      id: item.id,
      image: item.image,
      price: item.price,
      title: item.title,
    }));
  } catch (error) {
    return error;
  }
};

export default fetchShoppingData;
