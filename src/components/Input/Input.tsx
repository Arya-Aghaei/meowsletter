import {
  FormItemErrorMessage,
  FormItemRequiredLabel,
  FormItemWrapper,
} from "../Shared";
import { InputComponent, InputLabel } from "./Input.style";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  id: string;
  error?: string;
  innerRef?: any;
}

function Input({ label, innerRef, ...props }: InputProps) {
  return (
    <FormItemWrapper>
      {label && (
        <InputLabel htmlFor={props?.id}>
          {label}{" "}
          {props?.required && <FormItemRequiredLabel>*</FormItemRequiredLabel>}
        </InputLabel>
      )}
      <InputComponent {...props} ref={innerRef} />
      {props?.error && (
        <FormItemErrorMessage>{props?.error}</FormItemErrorMessage>
      )}
    </FormItemWrapper>
  );
}

export default Input;
