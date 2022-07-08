import { takeEvery, put } from 'redux-saga/effects';
import { actions as appActions } from './duck';
import { actionCreators as beerActionCreators } from 'modules/beers/duck';
import {
  actionCreators as apiSettingsActions,
  actions as apiActions
} from 'modules/apiSettings/duck';

function* initApp() {
  yield put(beerActionCreators.getBeers());
}

function* fetchApi() {
  yield put(apiSettingsActions.fetchApiSettings());
}

export function* watchApp() {
  yield takeEvery(appActions.INIT_APP, fetchApi);
  yield takeEvery(apiActions.INIT_API_SETTINGS, initApp);
}
