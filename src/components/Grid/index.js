import React, { useContext /*, useState*/ } from 'react';
// import { useDispatch } from 'react-redux';
// import InfiniteScroll from 'react-infinite-scroller';
import { AppContext } from 'app';
// import { actionCreators as layoutActions } from 'modules/layout/duck';
// import { actionCreators as beerActionCreators } from 'modules/beers/duck';
import Card from 'components/Card';
import './Grid.scss';

const Grid = ({list}) => {
  // const dispatch = useDispatch();

  const { grid: { itemsPerRow, columnGap, rowGap } } = useContext(AppContext);
  // const [hasMore, setHasMore] = useState(true);

  // const loadMore = (page) => {
    // console.log(page);
    // dispatch(layoutActions.setPageNum(page));
    // dispatch(beerActionCreators.getBeers());
  // };

  return (
    /*
    <InfiniteScroll
      pageStart={1}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<div className="loader" key={0}>Loading ...</div>}
    >*/
      <div
        className='Grid'
        style={{
          gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
          gridColumnGap: `${columnGap}px`,
          gridRowGap: `${rowGap}px` 
        }}
      >
        {list.map((data) => <Card key={data.id} data={data} /> )}
      </div>
    // </InfiniteScroll>
  );
};

export default Grid;
