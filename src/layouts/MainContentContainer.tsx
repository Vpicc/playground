import React from 'react';
import './MainContentContainer.css';

const MainContentContainer = ({ children }: { children: JSX.Element }): JSX.Element => {
  return <div className='main-content'>{children}</div>;
};

export default MainContentContainer;
