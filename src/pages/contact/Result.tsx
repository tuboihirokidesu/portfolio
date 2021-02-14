import React, { useState } from "react";
import Confetti from "react-confetti";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ContactHerder from "../../components/ContactHerder";
import MainContainer from "../../components/contact/MainContainer";
import PrimaryBtn from "../../components/contact/Button";
import { Data, useData } from "../../components/contact/DataContext";

const useStyles = makeStyles({
  root: {
    marginBottom: "30px",
  },
  table: {
    marginBottom: "30px",
  },
});
export type RequiredThemeContextType = {
  data: Data;
};

const Result: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const styles = useStyles();
  const { data } = useData()! as RequiredThemeContextType;

  const entries = Object.entries(data).filter((entry) => entry[0] !== "files");
  const onSubmit = async () => {
    const formData = new FormData();

    entries.forEach((entry) => {
      formData.append(entry[0], entry[1]);
    });

    const res = await fetch("http://localhost:4000/", {
      method: "POST",
      body: formData,
    });

    if (res.status === 200) {
      Swal.fire("Great job!", "You've passed the challenge!", "success");
      setSuccess(true);
    }
  };

  if (success) {
    return <Confetti />;
  }

  return (
    <>
      <ContactHerder>
        <MainContainer>
          <Typography component='h2' variant='h5'>
            📋 Form Values
          </Typography>
          <TableContainer className={styles.root} component={Paper}>
            <Table className={styles.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Field</TableCell>
                  <TableCell align='right'>Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {entries.map((entry) => (
                  <TableRow key={entry[0]}>
                    <TableCell component='th' scope='row'>
                      {entry[0]}
                    </TableCell>
                    <TableCell align='right'>{entry[1].toString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <PrimaryBtn onClick={onSubmit}>Submit</PrimaryBtn>
          <Link to='/portfolio/contact'>Start over</Link>
        </MainContainer>
      </ContactHerder>
    </>
  );
};

export default Result;
