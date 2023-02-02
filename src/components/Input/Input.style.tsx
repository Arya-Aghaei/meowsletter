import styled from "styled-components";

interface InputProps {
  error?: string;
}

export const InputComponent: any = styled.input`
  outline: none;
  color: rgb(255, 255, 255);
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  width: 100%;
  transition: all 0.3s ease-in-out;

  background: rgba(19, 104, 108, 0.4);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;

  &:focus {
    border-bottom: 3px solid #fe8e6e;
  }
  &::placeholder {
    color: #ffffff95;
    font-weight: 200;
  }
  ${(props: InputProps) => props?.error && "border-bottom: 3px solid #ff3700;"}
`;

export const InputLabel = styled.label`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: left;
  width: 100%;
`;
