import React, { FC } from 'react';
import styled from "styled-components";

export const Button: FC<ButtonProps> = ({
  disabled     = false,
  isLoading    = false,
  onClick,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      {...rest}
      disabled     = {disabled}
      onClick      = {onClick}
      isLoading    = {isLoading}
    >
      <InnerContent hidden={isLoading}>{children}</InnerContent>
    </StyledButton>
  );
};

  const StyledButton = styled.button<ButtonProps>`
    position:        fixed;
    bottom:          0;
    right:           0;
    justify-content: center;
    text-align:      center;
    align-items:     center;
    display:         inline-flex;
    flex-direction:  row;
    text-transform:  uppercase;
    border:          none;
    cursor:          pointer;
    font-weight:     500;
    color:           'blue';
    border-radius:   4px;
    padding:         1rem 1rem;
    margin:          3rem 3rem;
    min-width:       fit-content;
  
    &:disabled {
      cursor:     not-allowed;
      background: darkblue;
      color:      darkblue;
      opacity:    0.7;
      outline:    none;
      border:     none;
    }
  
    &:active {
      transform: translateY(0.5px);
    }
  `;
  
  
  type ButtonProps = {
    children?:     any;
    className?:    string;
    disabled?:     boolean;
    hide?:         boolean;
    isLoading?:    boolean;
    onClick?:      React.MouseEventHandler<HTMLButtonElement>;
    open?:         boolean;
  };
  
  const InnerContent = styled.div`
    display:         flex;
    flex-direction:  row;
    position:        relative;
    align-items:     center;
    justify-content: center;
    gap:             0.5rem;
  `;