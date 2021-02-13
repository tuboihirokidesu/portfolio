import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Typography from "@material-ui/core/Typography";
import MainContainer from "../MainContainer";
import { useData } from "../DataContext";
import Form from "../Form";
import PrimaryBtn from "../Button";
import ContactHerder from "../../ContactHerder";
import { FileInput } from "../FileInput";

const Step3 = () => {
  const history = useHistory();
  const { data, setValues } = useData()!;
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });
  const onSubmit = handleSubmit((data) => {
    history.push("./contact/result");
    setValues(data);
  });

  return (
    <ContactHerder>
      <MainContainer>
        <Typography component='h2' variant='h5'>
          🦄 Step 3
        </Typography>
        <Form onSubmit={onSubmit}>
          <FileInput name='files' control={control} />
          <PrimaryBtn>Next</PrimaryBtn>
        </Form>
      </MainContainer>
    </ContactHerder>
  );
};
export default Step3;
