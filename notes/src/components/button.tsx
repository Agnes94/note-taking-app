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
    background-color: none;
    border-radius: 50%;
    transition: 0.3s ease-in-out;
    padding: 0.8rem 0.8rem;

    :hover {
      background-color: ${colors.slate5};
      background-position: fixed;
    }

    :active {
      transform: scale(0.92);
    }

    ::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 150%;
      aspect-ratio: 1 / 1;
      transform: translate(-50%, -50%) scale(0);
      pointer-events: none;
      border-radius: 99.9rem;
      background: rgba(255, 255, 255, 0.5);
    }

    :focus::after {
      animation: scale_up 1000ms forwards;
    }

    @keyframes scale_up {
      0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 1;
      }
      100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
      }
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
  color: hsl(155 24.0% 9.0%);
  border-radius: 4px;
  padding: 1rem 1rem;
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
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
