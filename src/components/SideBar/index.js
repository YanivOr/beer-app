import React from 'react';
import { useHistory } from 'react-router-dom';
import './SideBar.scss';

const SideBar = () => {
  const history = useHistory();

  return (
    <div className='SideBar'>
      <div onClick={() => history.push(`/browse`)}>Browse</div>
      <div onClick={() => history.push(`/favorite`)}>Favorite</div>
    </div>
  );
};

export default SideBar;
