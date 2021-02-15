import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  src: string;
  text: string;
  label: string;
  path: string;
};

const CardItem: React.FC<Props> = ({ src, text, label, path }) => {
  return (
    <CardsItem>
      <CardsItemLink to={path}>
        <CardsPicWrap data-category={label}>
          <CardsImage src={src} />
        </CardsPicWrap>
        <CardsItemInfo>
          <CardsItemText>{text}</CardsItemText>
        </CardsItemInfo>
      </CardsItemLink>
    </CardsItem>
  );
};

export default CardItem;

const CardsItem = styled.li`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;

  @media only screen and (max-width: 1024px) {
    margin-bottom: 2rem;
  }
`;
const CardsItemLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.1));
  filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.1));
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
  color: #252e48;
  font-size: 18px;
  line-height: 24px;
`;
