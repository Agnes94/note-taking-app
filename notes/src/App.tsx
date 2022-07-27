import React from 'react';
import { Button } from './components/button';
import { SidePanel } from './components/sidePanel';
import { GlobalStyle } from './globalStyles';
import { useClickOutside } from './util';

export const App = () => {

  const [showSidePanel, setShowSidePanel] = React.useState<boolean>(false);
  const toggleSidePanel = React.useCallback(() => setShowSidePanel(!showSidePanel), [showSidePanel]);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  useClickOutside(wrapperRef, () => setShowSidePanel(false));


  return (
    <div ref={wrapperRef}>
      <GlobalStyle />
      <SidePanel showSidePanel={showSidePanel}>
        hello
      </SidePanel>
      <Button onClick={toggleSidePanel}>Open</Button>
    </div>
  );
}

