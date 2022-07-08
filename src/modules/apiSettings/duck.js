/** action types **/
const prefix = 'api-settings';
const FETCH_API_SETTINGS = `${prefix}/FETCH_API_SETTINGS`;
const INIT_API_SETTINGS = `${prefix}/INIT_API_SETTINGS`;

/** action creators **/
const initApiSettings = apiSettings => ({
  type: INIT_API_SETTINGS,
  payload: apiSettings
});

const fetchApiSettings = () => ({
  type: FETCH_API_SETTINGS
});

/** reducer **/
export const apiSettings = (state = {}, action) => {
  switch (action.type) {
    case INIT_API_SETTINGS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return { ...state };
  }
};

/** exports **/
export const actions = {
  INIT_API_SETTINGS,
  FETCH_API_SETTINGS
};

export const actionCreators = {
  initApiSettings,
  fetchApiSettings
};
