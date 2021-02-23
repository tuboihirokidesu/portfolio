import styled from "styled-components";
import Navbar from "../components/Navbar";
import bgImage from "../images/coffee-apple.jpg";

const About: React.FC = () => {
  return (
    <Content>
      <Navbar />
    </Content>
  );
};

export default About;

const Content = styled.div`
  border: 1px solid #000;
  background-image: url(${bgImage});
  width: 2000px;
  height: 2000px;
`;
