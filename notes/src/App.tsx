import React from 'react';
import { Button } from './components/button';
import { SidePanel } from './components/sidePanel';

export const App = () => {
  return (
    <div>
      Hello!
      <SidePanel/>
      <Button>Hello</Button>
    </div>
  );
}

