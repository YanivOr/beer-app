/** action types **/
const prefix = 'beers';
const GET_BEERS = `${prefix}/GET_BEERS`;
const BEERS_RECEIVED = `${prefix}/BEERS_RECEIVED`;
const BEERS_LOADING = `${prefix}/BEERS_LOADING`;


/** action creators **/
const getBeers = () => ({
  type: GET_BEERS
});

const beersReceived = beers => ({
  type: BEERS_RECEIVED,
  payload: beers
});

const beersLoading = () => ({
  type: BEERS_LOADING
});

/** reducer **/
export const beers = (state = {}, action) => {
  switch (action.type) {
    case BEERS_RECEIVED:
      return {
        ...state,
        beersList: action.payload,
        isLoading: false
      };
    case BEERS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return { ...state };
  }
};

/** exports **/
export const actions = {
  GET_BEERS,
  BEERS_RECEIVED,
  BEERS_LOADING
};

export const actionCreators = {
  getBeers,
  beersReceived,
  beersLoading
};
