import React from 'react';
import styled from 'styled-components';
import bgImage from 'images/coffee-apple.jpg';
import articleCardData from 'data/articleCardItem';
import ArticleCardItem from './ArticleCardItems';

const Cards = styled.div`
  padding: 6rem;
  background-image: url(${bgImage});
  height: 100vh;
`;
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
  height: 100%;
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

const ArticleCard: React.FC = () => (
  <Cards>
    <CardsContainer>
      <CardsWrap>
        {articleCardData.map((item) => (
          <CardsItems key={item.id}>
            <ArticleCardItem
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

export default ArticleCard;
