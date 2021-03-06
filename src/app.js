import React, { createContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { BROWSE, FAVORITE } from 'config/constants';
import { actionCreators as appActions } from 'modules/app/duck';
import { actionCreators as layoutActions } from 'modules/layout/duck';
import Header from 'components/Header';
import Browse from 'views/Browse';
import Favorite from 'views/Favorite';

const appContext = {
  header: {
    height: 100,
  },
  grid: {
    itemsPerRow: 6,
    columnGap: 10,
    rowGap: 10,
  },
  card: {
    height: 300,
  }
};

export const AppContext = createContext(appContext);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const itemsPerPage = Math.ceil(((window.innerHeight - appContext.header.height) / (appContext.grid.rowGap + appContext.card.height)) + 1) * appContext.grid.itemsPerRow;

    dispatch(appActions.initApp());
    dispatch(layoutActions.setItemsPerPage(itemsPerPage));
    dispatch(layoutActions.setPageNum(1));
  }, [dispatch]);
 
  return (
    <Router>
      <Header />
      <div className='main' style={{ marginTop: `${appContext.header.height}px` }}>
        <Switch>
          <Redirect from='/index.html' to={BROWSE} />
          <Route exact path='/'>
            <Redirect to={BROWSE} />
          </Route>
          <Route path={BROWSE} component={Browse} />
          <Route path={FAVORITE} component={Favorite} />
          <Route component={() => <div style={{ color: 'red' }}>Not found</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
