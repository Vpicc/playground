import React, { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
const container = document.getElementById('app-root')!;
const root = createRoot(container);

const App = (): ReactNode => {
  return (<div>
    <h1>Hello world!</h1>

  </div>);
}

root.render(App());
