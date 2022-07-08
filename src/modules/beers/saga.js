import { call, put, takeLatest } from 'redux-saga/effects';
import { request } from 'services/api';
import { actionCreators, actions } from './duck';

function* getBeers() {
  try {
    yield put(actionCreators.beersLoading());
    const data = yield call(() => request('v2', 'beers'));
    if (data) {
      yield put(actionCreators.beersReceived(data));
    }
  } catch (error) {
    console.dir(error);
  }
}

export function* watchBeers() {
  yield takeLatest(actions.GET_BEERS, getBeers);
}
