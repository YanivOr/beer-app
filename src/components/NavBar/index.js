import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './NavBar.scss';

const BROWSE = '/browse';
const FAVORITE = '/favorite';

const navItems = [BROWSE, FAVORITE];

const NavBar = () => {
  const history = useHistory();
  const [pathname, setPathname] = useState(navItems.includes(history.location.pathname) ? history.location.pathname : BROWSE);

  const navClicked = (location) => {
    history.push(location);
    setPathname(location);
  };

  return (
    <div className='NavBar'>
      <div className={`nav-item ${pathname === BROWSE ? 'active' : ''}`} onClick={() => navClicked(BROWSE)}>Browse</div>
      <div className={`nav-item ${pathname === FAVORITE ? 'active' : ''}`} onClick={() => navClicked(FAVORITE)}>Favorite</div>
    </div>
  );
};

export default NavBar;
