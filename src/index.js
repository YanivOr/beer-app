import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'modules/rootReducer';
import rootSaga from 'modules/rootSaga';
import './index.scss';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer(), composeEnhancer(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

const Routes = lazy(() => import('app'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div></div>}>
        <Routes />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('react-root') || document.createElement('div')
);