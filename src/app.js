import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'config/constants';
import { actionCreators as appActions } from 'modules/app/duck';
import Browse from 'views/Browse';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.initApp());
  }, [dispatch]);
  
  return (
    <Router>
      <Switch>
        <Redirect from='/index.html' to={routes.BROWSE} />
        <Route exact path='/'>
          <Redirect to={routes.BROWSE} />
        </Route>
        <Route path={routes.BROWSE} component={Browse} />
        <Route component={() => <div style={{ color: 'red' }}>Not found</div>} />
      </Switch>
    </Router>
  );
};

export default App;
