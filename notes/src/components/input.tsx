import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { SearchIcon } from "../assets/svg/searchIcon";

const IconsContainer = styled.div`
  position: absolute;
  top: 0.8rem;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;

  &:hover,
  &:focus {
    &::after,
    &::before {
      opacity: 1;
      visibility: visible;
      transition: opacity 0.2s ease-out 0s, visibility 0s ease-out 0s;
    }
  }
`;

const InputField = styled.input<{ focused?: boolean }>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  font-size: 1.6rem;
  line-height: 2rem;
  width: 100%;
  color: black;
  background-color: transparent;
  outline: none;
  padding: 1rem;
  transition: all 0.3s ease;
  border: 1px solid;
  border-radius: 0.4rem;
  border-color: gray;

  &:focus {
    border-color: black;
    transition-delay: 0.1s;
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 20rem;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  onChange?: () => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  value = "",
  onChange = () => {},
  onFocus = () => {},
  ...props
}) => {

  return (
    <InputGroup>
        <InputField
          onChange={onChange}
          {...props}
        />
        <IconsContainer>
          <SearchIcon />
        </IconsContainer>
    </InputGroup>
  );
};
