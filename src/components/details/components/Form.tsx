import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
}));

type Props = {
  onSubmit: () => void;
};
const Form: React.FC<Props> = ({ children }) => {
  const styles = useStyles();
  return (
    <form className={styles.root} noValidate>
      {children}
    </form>
  );
};

export default Form;
