import styled from "styled-components";
import bgImage from "../images/coffee-apple.jpg";

const About = () => {
  return <Content></Content>;
};

export default About;

const Content = styled.div`
  border: 1px solid #000;
  background-image: url(${bgImage});
  width: 2000px;
  height: 2000px;
`;