import React, { ReactNode } from 'react';

const Button = ({ text, onClick }: { text: string, onClick: React.MouseEventHandler }): ReactNode => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
