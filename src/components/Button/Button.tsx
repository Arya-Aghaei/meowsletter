import Loading from "../Loading";
import { ButtonComponent, ButtonWrapper } from "./Button.style";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  isLoading?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <ButtonWrapper>
      <ButtonComponent {...props} disabled={props?.isLoading}>
        {props?.isLoading ? (
          <>
            <Loading text="Loading..." size={10} />
          </>
        ) : (
          props?.children
        )}
      </ButtonComponent>
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  isLoading: false,
};

export default Button;
