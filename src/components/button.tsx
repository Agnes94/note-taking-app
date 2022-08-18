import React, { FC } from "react";
import styled, { css } from "styled-components";
import { colors } from "../colors";

interface ButtonProps {
  children?: any;
  className?: string;
  disabled?: boolean;
  variant: ButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  open?: boolean;
}

type ButtonVariant = "primary" | "icon";

export const Button: FC<ButtonProps> = ({
  disabled = false,
  onClick,
  variant,
  children,
  ...rest
}) => {
  return (
    <StyledButton
      {...rest}
      disabled={disabled}
      variant={variant}
      onClick={onClick}
    >
      <InnerContent>{children}</InnerContent>
    </StyledButton>
  );
};

const buttonStyles = {
  primary: css`
    background: ${colors.slate3};

    :hover {
      background: ${colors.slate4};
    }

    :focus {
      outline: 2px solid ${colors.slate5};
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    :active {
      background: ${colors.slate6};
    }
  `,

  icon: css`
    background: transparent;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
    padding: 0.8rem 0.8rem;

    :hover {
      background-color: ${colors.slate4};
    }
  `,
};

const StyledButton = styled.button<ButtonProps>`
  justify-content: center;
  background-color: none;
  text-align: center;
  align-items: center;
  display: inline-flex;
  flex-direction: row;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  font-weight: 400;
  color: hsl(155 24% 9%);
  border-radius: 4px;
  padding: 1.2rem 1.2rem;
  min-width: fit-content;
  ${(props) =>
    props.variant ? buttonStyles[props.variant] : buttonStyles["primary"]};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    outline: none;
    border: none;
  }

  &:active {
    transform: translateY(0.5px);
  }
`;

const InnerContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
