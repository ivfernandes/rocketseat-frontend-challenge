import styled from "styled-components";
import { SearchIcon } from "./icons/searchIcon";
import { InputHTMLAttributes } from "react";

const Input = styled.input`
  width: 352px;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  background-color: var(--bg-secondary);

  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`;

const PrimaryInputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

interface PrimaryInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  handleChange: (value: string) => void;
}

export const PrimaryInput = (props: PrimaryInputProps) => (
  <PrimaryInputContainer>
    <Input
      onChange={(event) => props.handleChange(event.target.value)}
      {...props}
    />
    <SearchIcon />
  </PrimaryInputContainer>
);
