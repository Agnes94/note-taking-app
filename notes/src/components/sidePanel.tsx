import React, { ReactNode } from "react";
import styled from "styled-components";
import { CloseIcon } from "../assets/svg/closeIcon";
import { Button } from "./button";

interface SidePanelProps {
  close?: () => void;
  showSidePanel?: boolean;
  children?: ReactNode;
  closeOnClickOutside?: boolean;
}

export const SidePanel = (props: SidePanelProps) => {
  const { close, showSidePanel, children } = props;

  return (
    <div>
      <PanelContainer showSidePanel={showSidePanel} close={close}>
        <ButtonContainer>
          <Button onClick={close} variant="icon">
            <CloseIcon width="1.4rem" height="1.4rem" />
          </Button>
        </ButtonContainer>
        {children}
      </PanelContainer>
    </div>
  );
};

const PanelContainer = styled.div<SidePanelProps>`
  position: fixed;
  padding: 1rem 1rem;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100vh;
  width: 36rem;
  overflow: scroll;
  transform: ${(p) =>
    p.showSidePanel ? "translateX(0%)" : "translate(-100%)"};
  transition: all 0.4s;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;
`;
