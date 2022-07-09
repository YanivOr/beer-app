import { combineReducers } from 'redux';
import { app } from 'modules/app/duck';
import { apiSettings } from 'modules/apiSettings/duck';
import { layout } from 'modules/layout/duck';
import { beers } from 'modules/beers/duck';

const rootReducer = () =>
  combineReducers({
    app,
    apiSettings,
    layout,
    beers
  });

export default rootReducer;
