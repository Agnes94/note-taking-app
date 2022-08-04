import React, { ReactNode } from "react";
import styled from "styled-components";

interface SidePanelProps {
  open?: () => void;
  close?: (open: boolean) => void;
  showSidePanel?: boolean;
  children?: ReactNode;
  closeOnClickOutside?: boolean;
}

export const SidePanel = (props: SidePanelProps) => {
  const { open, showSidePanel, children } = props;

  return (
    <div>
      <PanelContainer showSidePanel={showSidePanel} onClick={open}>
        {children}
      </PanelContainer>
    </div>
  );
};

const PanelContainer = styled.div<SidePanelProps>`
  position: fixed;
  background-color: transparent;
  padding: 1rem 1rem;
  z-index: 10;
  opacity: 0.8;
  top: 0;
  left: 0;
  height: 100vh;
  width: 36rem;
  transform: ${(p) =>
    p.showSidePanel ? "translateX(0%)" : "translate(-100%)"};
  transition: all 0.4s;
`;
