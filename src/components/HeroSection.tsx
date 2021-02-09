import styled from "styled-components";
import { Button } from "./Button";
import Typed from "react-typed";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeader strings={["Hioki Tuboi"]} typeSpeed={80} />
      <HeroParagraph
        strings={["React", "TypeScript"]}
        typeSpeed={70}
        backSpeed={40}
        loop
      />
      <HeroBtnWrap>
        <Button to='/contact'>GET STARTED</Button>
      </HeroBtnWrap>
    </HeroContainer>
  );
};

export default HeroSection;

const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("images/img-home1.jpg") center center/cover no-repeat;
  width: 100%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
`;

const HeroHeader = styled(Typed)`
  color: #fff;
  font-size: 100px;
  margin-top: 200px;

  @media screen and (max-width: 960px) {
    font-size: 70px;
    margin-top: 250px;
  }
`;
const HeroParagraph = styled(Typed)`
  margin-top: 8px;
  color: #fff;
  font-size: 32px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;
const HeroBtnWrap = styled.div`
  margin-top: 32px;
`;
