import Loading from "../Loading";
import { ButtonComponent, ButtonWrapper } from "./Button.style";

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  loading?: boolean;
}

function Button(props: ButtonProps) {
  return (
    <ButtonWrapper>
      <ButtonComponent {...props} disabled={props?.loading}>
        {props?.loading ? (
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

export default Button;
