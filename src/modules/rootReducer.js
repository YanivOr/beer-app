import { combineReducers } from 'redux';
import { app } from 'modules/app/duck';
import { apiSettings } from 'modules/apiSettings/duck';
import { beers } from 'modules/beers/duck';

const rootReducer = () =>
  combineReducers({
    app,
    apiSettings,
    beers
  });

export default rootReducer;
