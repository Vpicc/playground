import React, { useState } from 'react';
import Button from '../components/Button';
import './Sidebar.css';

const Sidebar = (): JSX.Element => {
  const [generatedSidebar] = useState(['element1', 'element2', 'element3', 'element4']);
  return (<div className='sidebar'>
    {generatedSidebar.map((element, index) => <Button key={index} >{element}</Button>)}
  </div>
  );
};

export default Sidebar;
