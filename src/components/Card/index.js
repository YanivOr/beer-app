import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from 'app';
import { actionCreators as beerActionCreators } from 'modules/beers/duck';
import Toggle from 'components/Toggle';
import './Card.scss';

const Card = ({ data: { id, name, image_url } }) => {
  const dispatch = useDispatch();

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
      <Toggle checked={favorite.includes(id)} toggleChecked={toggleChecked} />
    </div>
  );
};

export default Card;
