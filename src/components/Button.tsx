import React from 'react';
import './Button.css';

const Button = ({ children, onClick }: { children: string, onClick?: React.MouseEventHandler }): JSX.Element => {
  return <button className='stylized-button' onClick={onClick}>{children}</button>;
};

export default Button;
