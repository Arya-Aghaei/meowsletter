import {
  FormItemErrorMessage,
  FormItemRequiredLabel,
  FormItemWrapper,
} from "../Shared";
import { InputComponent, InputLabel } from "./Input.style";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  id: string;
  error?: string | boolean;
  innerRef?: any;
}

function Input({ label, innerRef, ...props }: InputProps) {
  return (
    <FormItemWrapper>
      {label && (
        <InputLabel htmlFor={props?.id} data-testid={`label-for-${props?.id}`}>
          {label}{" "}
          {props?.required && <FormItemRequiredLabel>*</FormItemRequiredLabel>}
        </InputLabel>
      )}
      <InputComponent {...props} ref={innerRef} data-testid={`input-${props?.id}`} />
      {props?.error && (
        <FormItemErrorMessage role="alert" data-testid={`error-message-${props?.id}`}>{props?.error}</FormItemErrorMessage>
      )}
    </FormItemWrapper>
  );
}

export default Input;
