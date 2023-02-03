import styled from "styled-components";

export const FormItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  position: relative;
`;

export const FormItemLabel = styled.label`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: left;
  width: 100%;
`;

export const FormItemRequiredLabel = styled.span`
  color: #ff3700;
`;

export const FormItemErrorMessage = styled.span`
  color: #ff4d1c;
  font-size: 0.9rem;
  margin: 0.25rem 0;
  text-align: left;
  width: 100%;
  text-shadow: 0 0 5px #262626;
  margin-bottom: -1rem;
`;
