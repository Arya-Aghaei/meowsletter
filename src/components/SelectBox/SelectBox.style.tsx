import styled from "styled-components";

interface InputProps {
  error?: string;
}

export const SelectWrapper = styled.div`
  width: 100%;
  position: relative;

  &:after {
    content: "▼";
    font-size: 11px;
    color: #aaa;
    right: 15px;
    top: 13px;
    padding: 0 0 2px;
    position: absolute;
    pointer-events: none;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
`;

export const SelectBoxComponent: any = styled.select.attrs(({ref}) => ({
  ref: ref,
}))`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  width: 100%;
  border: none;
  outline: none;
  outline-color: red;
  color: #ffffff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  width: 100%;
  transition: all 0.3s ease-in-out;

  background: rgba(19, 104, 108, 0.4);
  border-radius: 5px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  cursor: pointer;

  &:focus {
    border-bottom: 3px solid rgb(254, 142, 110);
  }

  &:after {
    content: "Ax";
    color: #0ebeff;
    right: 11px;
    top: 6px;
    height: 34px;
    padding: 15px 0px 0px 8px;
    border-left: 1px solid #0ebeff;
    position: absolute;
    pointer-events: none;
    z-index: 11;
  }
  ${(props: InputProps) => props?.error && "border-bottom: 3px solid #ff3700;"}
`;

export const SelectBoxOption = styled.option`
  min-height: 1.5rem !important;
  padding: 14px !important;
`;
