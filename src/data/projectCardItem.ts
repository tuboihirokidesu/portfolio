export type CardData = Array<{
  id: string;
  src: string;
  text: string;
  label: string;
  path: string;
}>;

export const cardData: CardData = [
  {
    id: '0',
    src: 'images/noughts-and-crosses.png',
    text: 'マルバツゲーム',
    label: 'React Hooks',
    path: './project/noughts-and-crosses',
  },
  {
    id: '1',
    src: 'images/covid-19.jpg',
    text: 'コロナの情勢',
    label: 'Axios',
    path: './project/corona',
  },
  {
    id: '2',
    src: 'images/shopping-cart.jpg',
    text: 'ショッピングカート',
    label: 'JavaScript',
    path: './project/shopping-cart',
  },
  {
    id: '3',
    src: 'images/pg-image.jpg',
    text: 'Appleカレンダー',
    label: 'moment.js',
    path: './project/calender',
  },
  {
    id: '4',
    src: 'images/pg-image.jpg',
    text: 'Ffffffffffffffffffffffffffffffffffff',
    label: 'CSS',
    path: './F',
  },
];
