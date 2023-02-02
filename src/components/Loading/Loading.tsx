import { LoadingComponent, LoadingWrapper } from "./Loading.style";

interface LoadingProps {
  loading?: boolean;
  size?: number;
  text?: string;
  textStyle?: React.CSSProperties;
  dir?: "right" | "left";
}
function Loading(props: LoadingProps) {
  return (
    <LoadingWrapper>
      {props.dir === "left" && <LoadingComponent {...props} />}
      <p style={props.textStyle}>{props.text}</p>
      {props.dir === "right" && <LoadingComponent {...props} />}
    </LoadingWrapper>
  );
}

Loading.defaultProps = {
  loading: true,
  size: 80,
  dir: "left",
};

export default Loading;
