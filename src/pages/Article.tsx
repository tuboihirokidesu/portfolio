import React from 'react';
import styled from 'styled-components';
import bgImage from 'images/coffee-apple.jpg';
import Navbar from 'components/Navbar/Navbar';

const Content = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  background-image: url(${bgImage});
`;

const Article: React.FC = () => (
  <>
    <Navbar />
    <Content>
      <div>Article</div>
    </Content>
  </>
);

export default Article;
