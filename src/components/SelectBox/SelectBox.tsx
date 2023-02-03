import {
  FormItemErrorMessage,
  FormItemLabel,
  FormItemRequiredLabel,
  FormItemWrapper,
} from "../Shared";
import {
  SelectBoxComponent,
  SelectBoxOption,
  SelectWrapper,
} from "./SelectBox.style";
import { v4 as uuidv4 } from "uuid";

interface SelectBoxProps extends React.HTMLProps<HTMLSelectElement> {
  options: { value: string; label: string }[];
  label?: string;
  id: string;
  error?: string;
}

function SelectBox({ options = [], label, ...props }: SelectBoxProps) {
  return (
    <FormItemWrapper>
      {label && (
        <FormItemLabel htmlFor={props?.id}>
          {label}{" "}
          {props?.required && <FormItemRequiredLabel>*</FormItemRequiredLabel>}
        </FormItemLabel>
      )}
      <SelectWrapper>
        <SelectBoxComponent {...props} value={props?.value || 0}>
          <SelectBoxOption value={0} disabled hidden>
            Select your option
          </SelectBoxOption>
          {options.map((option) => (
            <SelectBoxOption key={uuidv4()} value={option.value}>
              {option.label}
            </SelectBoxOption>
          ))}
        </SelectBoxComponent>
      </SelectWrapper>
      {props?.error && (
        <FormItemErrorMessage>{props?.error}</FormItemErrorMessage>
      )}
    </FormItemWrapper>
  );
}

export default SelectBox;
