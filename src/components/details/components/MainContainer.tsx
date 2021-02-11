import { Container, makeStyles, Theme } from "@material-ui/core";
import { Props } from "./types/propsTypes";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const MainContainer: React.FC<Props> = ({ children }) => {
  const styles = useStyles();
  return (
    <Container className={styles.root} component='main' maxWidth='xs'>
      {children}
    </Container>
  );
};

export default MainContainer;
