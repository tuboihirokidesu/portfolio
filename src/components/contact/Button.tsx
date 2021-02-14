import Button from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(3, 0, 2),
  },
}));
type Props = {
  onClick?: () => Promise<void>;
};

const PrimaryBtn: React.FC<Props> = ({ children }) => {
  const styles = useStyles();
  return (
    <Button
      type='submit'
      fullWidth
      variant='contained'
      color='primary'
      className={styles.root}
    >
      {children}
    </Button>
  );
};

export default PrimaryBtn;
