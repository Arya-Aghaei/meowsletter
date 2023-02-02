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
        <SelectBoxComponent {...props}>
          <SelectBoxOption value="" disabled selected hidden>
            Select your option
          </SelectBoxOption>
          {options.map((option) => (
            <SelectBoxOption
              value={option.value}
              selected={props?.defaultValue === option.value}
            >
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
