// import { makeStyles, Theme } from "@material-ui/core";

// const useStyles = makeStyles((theme: Theme) => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing(1),
//   },
// }));
// const Form: React.FC<{}> = ({ children,...props }) => {
//   const styles = useStyles();
//   return (
//     <form {...props} className={styles.root} noValidate>
//       {children}
//     </form>
//   );
// };

// export default Form;

import styled from "styled-components";

const Form = styled.form`
  width: "100%";
  margin-top: theme.spacing(1);
`;
export default Form;
