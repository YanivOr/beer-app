import React, { useContext } from 'react';
import { AppContext } from 'app';
import NavBar from 'components/NavBar';
import './Header.scss';

const Header = () => {
  const { header: { height } } = useContext(AppContext);

  return (
    <div className='Header' style={{ height: `${height}px` }}>
      <h1 className='title'>Beer App</h1>
      <NavBar />
    </div>
  );
};

export default Header;
