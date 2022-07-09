import { call, put, takeLatest } from 'redux-saga/effects';
import { store } from 'index';
import { request } from 'services/api';
import { actionCreators, actions } from './duck';

function* getBeers() {
  const { layout: { pageNum, itemsPerPage } } = store.getState();

  try {
    yield put(actionCreators.beersLoading());
    const data = yield call(() => request('v2', 'beers', 'GET', {}, { page: pageNum, per_page: itemsPerPage }));
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
