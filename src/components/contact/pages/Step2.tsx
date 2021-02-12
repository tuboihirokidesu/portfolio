import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useData } from "../DataContext";
import MainContainer from "../MainContainer";
import Input from "../Input";
import Form from "../Form";
import PrimaryBtn from "../Button";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

const normalizePhoneNumber = (value: any) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  if (!phoneNumber) {
    return value;
  }

  return phoneNumber.formatInternational();
};

export const Step2 = () => {
  const { setValues, data } = useData()!;
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const hasPhone = watch("hasPhone");

  const onSubmit = (data: any) => {
    history.push("./portfolio/contact/step3");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component='h2' variant='h5'>
        🦄 Step 2
      </Typography>
      <Form>
        <Input
          ref={register}
          id='email'
          type='email'
          label='Email'
          name='email'
          error={!!errors.email}
          helperText={errors?.email?.message}
          required
        />

        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={data.hasPhone}
              color='primary'
              inputRef={register}
              name='hasPhone'
            />
          }
          label='Do you have a phone'
        />

        {hasPhone && (
          <Input
            ref={register}
            id='phoneNumber'
            type='tel'
            label='Phone Number'
            name='phoneNumber'
            onChange={(event: any) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryBtn onClick={onclick}>Next</PrimaryBtn>
      </Form>
    </MainContainer>
  );
};
export default Step2;
