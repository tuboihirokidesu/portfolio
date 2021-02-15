import { Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import MainContainer from "../../components/contact/MainContainer";
import Form from "../../components/contact/Form";
import { useData } from "../../components/contact/DataContext";
import Input from "../../components/contact/Input";
import PrimaryBtn from "../../components/contact/Button";

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

const Step1: React.FC = () => {
  const history = useHistory();
  const { data, setValues } = useData()!;

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
      <FormHead variant='h5'>🦄 Step 1</FormHead>
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

const FormHead = styled(Typography)`
  color: #f9ab00;
  font-weight: 300;
`;
