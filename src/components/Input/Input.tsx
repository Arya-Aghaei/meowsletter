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
}

function Input({ label, ...props }: InputProps) {
  return (
    <FormItemWrapper>
      {label && (
        <InputLabel htmlFor={props?.id}>
          {label}{" "}
          {props?.required && <FormItemRequiredLabel>*</FormItemRequiredLabel>}
        </InputLabel>
      )}
      <InputComponent {...props} />
      {props?.error && (
        <FormItemErrorMessage>{props?.error}</FormItemErrorMessage>
      )}
    </FormItemWrapper>
  );
}

export default Input;
