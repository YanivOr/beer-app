import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppContext } from 'app';
import { actionCreators as beerActionCreators } from 'modules/beers/duck';
import './Card.scss';

const Card = ({ data: { id, name } }) => {
  const dispatch = useDispatch();

  const { card: { height } } = useContext(AppContext);
  const { favorite } = useSelector(state => state.beers);

  const cardClicked = () => {
    if (favorite.includes(id)) {
      dispatch(beerActionCreators.delFav(id));
    } else {
      dispatch(beerActionCreators.addFav(id));
    }
  };

  return (
    <div className='Card' style={{ height: `${height}px` }} onClick={cardClicked}>
      {id} - {name}
    </div>
  );
};

export default Card;
