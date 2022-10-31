import React from 'react';
import './SidebarContentContainer.css';

const SidebarContentContainer = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <div className='sidebar-content'>{children}</div>;
};

export default SidebarContentContainer;
