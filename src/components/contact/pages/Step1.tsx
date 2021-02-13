import { Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useData } from "../DataContext";
import MainContainer from "../MainContainer";
// import Form from "../Form";
import PrimaryBtn from "../Button";
import Input from "../Input";
import Form from "../Form";

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

type FormData = {
  firstName: string;
  lastName: string;
};

const Step1 = () => {
  const history = useHistory();
  const { data, setValues } = useData()!;
  let { path, url } = useRouteMatch();

  const { register, handleSubmit, errors } = useForm<FormData>({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    history.push("./contact/step2");
    setValues(data);
  });
  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        🦄 Step 1
      </Typography>
      <Form onSubmit={onSubmit}>
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
        <PrimaryBtn>Next</PrimaryBtn>
      </Form>
    </MainContainer>
  );
};

export default Step1;
