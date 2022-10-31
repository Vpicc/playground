import React, { ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import GridContainer from './layouts/GridContainer';
import MainContentContainer from './layouts/MainContentContainer';
import Sidebar from './layouts/Sidebar';
import SidebarContentContainer from './layouts/SidebarContentContainer';
import Home from './pages/Home';
const container = document.getElementById('app-root')!;
const root = createRoot(container);

const App = (): ReactNode => {
  return (
  <GridContainer>
    <SidebarContentContainer><Sidebar/></SidebarContentContainer>
    <MainContentContainer><Home/></MainContentContainer>
  </GridContainer>);
}

root.render(App());
