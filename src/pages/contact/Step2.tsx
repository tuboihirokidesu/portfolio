import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import ContactHerder from "../../components/ContactHerder";
import MainContainer from "../../components/contact/MainContainer";
import Form from "../../components/contact/Form";
import Input from "../../components/contact/Input";
import PrimaryBtn from "../../components/contact/Button";
import { useData } from "../../components/contact/DataContext";

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

type FormData = {
  email: string;
  hasPhone: boolean;
  phoneNumber: number;
};

export const Step2: React.FC = () => {
  const history = useHistory();
  const { setValues, data } = useData()!;
  const { register, handleSubmit, watch, errors } = useForm<FormData>({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const hasPhone = watch("hasPhone");

  const onSubmit = handleSubmit((data) => {
    history.push("./result");
    setValues(data);
  });

  return (
    <ContactHerder>
      <MainContainer>
        <Typography component='h2' variant='h5'>
          🦄 Step 2
        </Typography>
        <Form onSubmit={onSubmit}>
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
          <PrimaryBtn>Next</PrimaryBtn>
        </Form>
      </MainContainer>
    </ContactHerder>
  );
};
export default Step2;
