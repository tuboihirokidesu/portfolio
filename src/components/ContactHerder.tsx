import { FC } from "react";
import styled from "styled-components";
import Typed from "react-typed";
import formImage from "../images/img-input.jpg";

const ContactHerder: FC<{}> = ({ children }) => {
  return (
    <Content>
      <ContactHead strings={["Contact Form"]} typeSpeed={80} />
      {children}
    </Content>
  );
};

export default ContactHerder;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 100vh;
  object-fit: cover;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  background-image: url(${formImage});
`;
const ContactHead = styled(Typed)`
  margin-top: 8px;
  color: #3612da;
  font-size: 28px;
  margin-top: 200px;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;
