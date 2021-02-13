import { makeStyles, Theme, Typography } from "@material-ui/core";
import { FC } from "react";
import styled from "styled-components";
import Typed from "react-typed";
import bgImage from "../images/coffee-apple.jpg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
    marginTop: "150px",
    textAlign: "center",
    fontSize: "40px",
    color: "deeppink",
    textShadow: "1px 1px darkmagenta",
  },
}));

const ContactHerder: FC<{}> = ({ children }) => {
  const styles = useStyles();
  return (
    <Content>
      <ContactHead strings={["The Ultimate Form Challenge"]} typeSpeed={80} />
      {children}
    </Content>
  );
};

export default ContactHerder;

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
const ContactHead = styled(Typed)`
  margin-top: 8px;
  color: #e012ad;
  font-size: 24px;
  margin-top: 200px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`;
