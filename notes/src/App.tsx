import React from 'react';
import { Button } from './components/button';
import { SidePanel } from './components/sidePanel';
import { GlobalStyle } from './globalStyles';

export const App = () => {

  const [showSidePanel, setShowSidePanel] = React.useState<boolean>(false);

  const toggleSidePanel = React.useCallback(() => setShowSidePanel(!showSidePanel), [showSidePanel]);

  return (
    <div>
      <GlobalStyle />
      <SidePanel showSidePanel={showSidePanel} />
      <Button onClick={toggleSidePanel}>Open</Button>
    </div>
  );
}

