import React from 'react';
import './GridContainer.css';

const GridContainer = ({ children }: { children: JSX.Element[] }): JSX.Element => {
  return <div className='grid-container'>{children}</div>;
};

export default GridContainer;
