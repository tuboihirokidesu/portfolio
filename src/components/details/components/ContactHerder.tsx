import { makeStyles, Theme, Typography } from "@material-ui/core";
import { FC } from "react";
import styled from "styled-components";
import img from "../../../images/coffee-apple.jpg";

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
      <Typography className={styles.root} component='h1' variant='h5'>
        The Ultimate Form Challenge
      </Typography>
      {children}
    </Content>
  );
};

export default ContactHerder;

const Content = styled.div`
  border: 1px solid #000;
  background-image: url(${img});
  width: 100vw;
  height: 100vh;
`;
