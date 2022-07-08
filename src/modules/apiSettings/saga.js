import { takeLatest, call, put } from 'redux-saga/effects';
import { actions as apiSettingsActions, actionCreators } from './duck';

export function* fetchApiSettings() {
  try {
    const res = yield call(fetch, '/api-settings.json', { mode: 'no-cors' });
    const json = yield res.json();

    yield put(actionCreators.initApiSettings(json));
  } catch (error) {
    console.dir(error);
  }
}

export function* watchApiSettings() {
  yield takeLatest(apiSettingsActions.FETCH_API_SETTINGS, fetchApiSettings);
}
