import { fork } from 'redux-saga/effects';
import { watchApp } from 'modules/app/saga';
import { watchApiSettings } from './apiSettings/saga';
import { watchBeers } from 'modules/beers/saga';

export default function* rootSaga() {
  yield fork(watchApp);
  yield fork(watchApiSettings);
  yield fork(watchBeers);
}
