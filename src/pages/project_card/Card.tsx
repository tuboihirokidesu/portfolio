import React from 'react';
import styled from 'styled-components';
import { cardData } from 'data/projectCardItem';
import bgImage from 'images/coffee-apple.jpg';
import CardItem from './CardItems';

const Cards = styled.div`
  padding: 6rem;
  background-image: url(${bgImage});
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

const Card: React.FC = () => (
  <Cards>
    <CardsContainer>
      <CardsWrap>
        {cardData.map((item) => (
          <CardsItems key={item.id}>
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

export default Card;
