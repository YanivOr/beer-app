import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { AppContext } from 'app';
import { actionCreators as layoutActions } from 'modules/layout/duck';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();
  
  const { header: { height } } = useContext(AppContext);

  const sidebarBtnClicked = () => {
    dispatch(layoutActions.toggleSideBar());
  };

  return (
    <div className='Header' style={{ height: `${height}px` }}>
      <div className='sidebar-btn' style={{ height: `${height}px` }}>
        <button onClick={sidebarBtnClicked}>OPEN</button>
      </div>
      <h1 className='title'>Beer App</h1>
    </div>
  );
};

export default Header;
