import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import { SearchIcon } from "../assets/svg/searchIcon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  onChange?: () => void;
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
}

export const SearchInput: React.FC<InputProps> = ({
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
        <IconContainer>
          <SearchIcon width='2.6rem' height='2.6rem'/>
        </IconContainer>
    </InputGroup>
  );
};

const IconContainer = styled.div`
  position: absolute;
  top: 0.8rem;
  right: -3rem;
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

const InputField = styled.input`
  display: block;
  font-size: 1.6rem;
  line-height: 2rem;
  width: 100%;
  color: black;
  background-color: transparent;
  padding: 1rem;
  padding-right: 3rem;
  transition: all 0.3s ease;
  border: none;
  border-radius: 0.4rem;

  &:focus {
    border-color: 1px solid black;
    outline: 1px solid black;
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 20rem;
`;