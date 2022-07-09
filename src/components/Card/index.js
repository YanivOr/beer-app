import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { BROWSE, FAVORITE } from 'config/constants';
import { AppContext } from 'app';
import { actionCreators as beerActionCreators } from 'modules/beers/duck';
import Toggle from 'components/Toggle';
import './Card.scss';

const Card = ({ data: { id, name, image_url } }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { card: { height } } = useContext(AppContext);
  const { favorite } = useSelector(state => state.beers);

  const toggleChecked = () => {
    if (favorite.includes(id)) {
      dispatch(beerActionCreators.delFav(id));
    } else {
      dispatch(beerActionCreators.addFav(id));
    }
  };

  return (
    <div className='Card' style={{ height: `${height}px` }}>
      <h3 className='title'>{name}</h3>
      <div className='item-img' style={{backgroundImage: `url(${image_url})`}}></div>

      {history.location.pathname === BROWSE && 
        <Toggle checked={favorite.includes(id)} toggleChecked={toggleChecked} />}

      {history.location.pathname === FAVORITE && 
        <button className='item-remove-btn' onClick={toggleChecked}>X Remove from favorites</button>}
    </div>
  );
};

export default Card;
