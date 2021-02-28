import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
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

const FlexContainer = styled.div`
  margin-top: 80px;
  position: relative;
  width: 100%;
  height: 100%;
`;

const FlexWrap = styled.div`
  display: flex;
  font-size: 32px;
  justify-content: space-around;
  color: #fff;
  margin-bottom: 100px;

  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: column;
  }
`;

const AboutParagraph = styled(Typed)`
  color: #fa923f;
  font-size: 64px;
`;

const ValueWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const About: React.FC = () => (
  <>
    <Navbar />
    <Content>
      <FlexContainer>
        <FlexWrap>
          <div>Language </div>
          <ValueWrap>
            <AboutParagraph strings={['JavaScript']} typeSpeed={110} />
            <AboutParagraph strings={['TypeScript']} typeSpeed={110} />
          </ValueWrap>
        </FlexWrap>
        <FlexWrap>
          <div>UI </div>

          <ValueWrap>
            <AboutParagraph strings={['Material-UI']} typeSpeed={110} />
            <AboutParagraph strings={['styled-components']} typeSpeed={110} />
          </ValueWrap>
        </FlexWrap>
      </FlexContainer>
    </Content>
  </>
);

export default About;
