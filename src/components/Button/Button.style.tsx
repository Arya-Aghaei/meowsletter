import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
  margin-top: 2rem;
`;

export const ButtonComponent: any = styled.button`
  height: 2.5rem;
  outline: none;
  color: rgb(255, 255, 255);
  font-size: 1rem;
  padding: 0.5rem 0.5rem;
  width: 100%;
  transition: all 0.3s ease-in-out;
  background-color: #fa724c;
  border-radius: 16px;
  border: 1px solid #fe8e6e;
  box-sizing: border-box;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  font-weight: 700;
  filter: contrast(1);
  cursor: pointer;
  &:hover {
    background-color: #fe8e6e;
    border: 1px solid #fe8e6e;
  }
  ${(props: any) =>
    props?.disabled &&
    `
    background-color: #f0ae9c;
     filter: contrast(0.5);
      cursor: not-allowed;
        &:hover {
    background-color: #f0ae9c;
  }
      `}
`;
