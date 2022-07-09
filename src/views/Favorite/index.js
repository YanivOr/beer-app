import React from 'react';
import { useSelector } from 'react-redux';
import Grid from 'components/Grid';
import './Favorite.scss';

const Favorite = () => {
  const { beersList, isLoading, favorite } = useSelector(state => state.beers);

  const favoriteBeers = beersList.filter(({id}) => {
    return favorite.includes(id);
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={'Favorite'}>
      {beersList && <Grid list={favoriteBeers} />}
    </div>
  );
};

export default Favorite;
