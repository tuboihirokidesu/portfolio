import styled from 'styled-components';

const CardsItem = styled.li`
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  height: 100%;
  margin: 0 1rem;
  border-radius: 10px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;
const CardsItemLink = styled.a`
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(230, 126, 57, 0.8);
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;
const CardsPicWrap = styled.figure`
  position: relative;
  width: 100%;
  padding-top: 67%;
  overflow: hidden;

  ::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 10px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }
`;
const CardsImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  object-fit: cover;
  transition: all 0.2s linear;

  :hover {
    transform: scale(1.1);
  }
`;
const CardsItemInfo = styled.div`
  padding: 20px 30px 30px;
`;
const CardsItemText = styled.h5`
  color: #fff;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  justify-content: center;
`;

type Props = {
  src: string;
  text: string;
  label: string;
  path: string;
};

const ArticleCardItem = ({ src, text, label, path }: Props) => (
  <CardsItem>
    <CardsItemLink href={path}>
      <CardsPicWrap data-category={label}>
        <CardsImage src={src} />
      </CardsPicWrap>
      <CardsItemInfo>
        <CardsItemText>{text}</CardsItemText>
      </CardsItemInfo>
    </CardsItemLink>
  </CardsItem>
);

export default ArticleCardItem;
