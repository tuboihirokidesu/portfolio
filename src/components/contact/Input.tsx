import { TextField } from "@material-ui/core";
import { forwardRef } from "react";
import styled from "styled-components";

type Props = {
  id: string;
  type: string;
  label: string;
  name: string;
  error?: boolean;
  helperText?: string | undefined;
  required?: boolean;
  onChange?: (event: any) => void;
};
const Input = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return (
    <TextFields
      variant='outlined'
      margin='normal'
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});

export default Input;

const TextFields = styled(TextField)`
  background-color: #fff;
  border-radius: 4px;
`;
