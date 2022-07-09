import React from 'react';
import { useSelector } from 'react-redux';
import Grid from 'components/Grid';
import './Browse.scss';

const Browse = () => {
  const { beersList, isLoading } = useSelector(state => state.beers);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={'Browse'}>
      {beersList && <Grid list={beersList} />}
    </div>
  );
};

export default Browse;
