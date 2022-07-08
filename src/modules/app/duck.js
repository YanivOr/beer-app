/** action types **/
const prefix = 'app';
const INIT_APP = `${prefix}/INIT_APP`;
const SET_APP_ERROR = `${prefix}/SET_APP_ERROR`;

/** action creators **/
const initApp = () => ({ type: INIT_APP });
const setAppError = error => ({ type: SET_APP_ERROR, payload: error });

/** reducer **/
export const app = (state = {}, action) => {
  switch (action.type) {
    case INIT_APP:
      return {
        ready: false,
        updating: false,
        error: null
      };
    case SET_APP_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};

/** exports **/
export const actions = {
  INIT_APP,
  SET_APP_ERROR
};

export const actionCreators = {
  initApp,
  setAppError
};
