import { Typography } from "@material-ui/core";
import PrimaryBtn from "./components/Button";
import Form from "./components/Form";
import Input from "./components/Input";
import { useData } from "./DataContext";
import MainContainer from "./components/MainContainer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useHistory } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^([^0-9]*)$/, "First name should not contain numbers")
    .required("First name is a required field"),
  lastName: yup
    .string()
    .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
    .required("Last name is a required field"),
});
const Step1 = () => {
  const { data, setValues } = useData()!;
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    history.push("./step2");
    setValues(data);
  };
  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        🦄 Step 1
      </Typography>
      <Form>
        <Input
          ref={register}
          id='firstName'
          type='text'
          label='First Name'
          name='firstName'
          error={!!errors.firstName}
          helperText={errors?.firstName?.message}
        />
        <Input
          ref={register}
          id='lastName'
          type='text'
          label='Last Name'
          name='lastName'
          error={!!errors.lastName}
          helperText={errors?.lastName?.message}
        />
        <PrimaryBtn onClick={onclick}>Next</PrimaryBtn>
      </Form>
    </MainContainer>
  );
};

export default Step1;
