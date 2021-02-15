export type CardData = {
  src: string;
  text: string;
  label: string;
  path: string;
}[];

const markdown = `# markdown test

[google](https://google.co.jp)

[about](/about)
`;

export const cardData: CardData = [
  {
    src: "images/pg-image.jpg",
    text: "Shopping-Cart",
    label: "React & TypeScript",
    path: "https://tuboihirokidesu.github.io/react-shopping-cart/",
  },
  {
    src: "images/pg-image.jpg",
    text: "Bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
    label: "TypeScript",
    path: "./B",
  },
  {
    src: "images/pg-image.jpg",
    text: "Cccccccccccccccccccccccccccccccccccc",
    label: "JavaScript",
    path: "./C",
  },
  {
    src: "images/pg-image.jpg",
    text: "Dddddddddddddddddddddddddddddddddddd",
    label: "Tailwind CSS",
    path: "./D",
  },
  {
    src: "images/pg-image.jpg",
    text: "Ffffffffffffffffffffffffffffffffffff",
    label: "CSS",
    path: "./F",
  },
];
