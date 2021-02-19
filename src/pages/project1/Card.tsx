import styled from "styled-components";
import { cardData } from "../../data/projectCardItem";
import CardItem from "./CardItems";

const Card: React.FC = () => {
  return (
    <Cards>
      <CardsHeader>Projects</CardsHeader>
      <CardsContainer>
        <CardsWrap>
          {cardData.map((item, index) => (
            <CardsItems key={index}>
              <CardItem
                src={item.src}
                label={item.label}
                path={item.path}
                text={item.text}
              />
            </CardsItems>
          ))}
        </CardsWrap>
      </CardsContainer>
    </Cards>
  );
};

export default Card;

const Cards = styled.div`
  padding: 6rem;
  box-shadow: inset 0 0 0 1000px rgba(202, 6, 6, 0.616);
  background: #fff;
`;
const CardsHeader = styled.h1`
  text-align: center;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;
const CardsWrap = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;
const CardsItems = styled.ul`
  margin-bottom: 24px;

  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`;
