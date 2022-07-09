/** action types **/
const prefix = 'beers';
const GET_BEERS = `${prefix}/GET_BEERS`;
const BEERS_RECEIVED = `${prefix}/BEERS_RECEIVED`;
const BEERS_LOADING = `${prefix}/BEERS_LOADING`;
const ADD_FAV = `${prefix}/ADD_FAV`;
const DEL_FAV = `${prefix}/DEL_FAV`;


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

const addFav = (id) => ({
  type: ADD_FAV,
  payload: id
});

const delFav = (id) => ({
  type: DEL_FAV,
  payload: id
});

/** reducer **/
export const beers = (state = {}, action) => {
  switch (action.type) {
    case BEERS_RECEIVED: {
      return {
        ...state,
        beersList: [...state.beersList, ...action.payload],
        isLoading: false
      };
    }
    case BEERS_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case ADD_FAV: {
      if (state.favorite.includes(action.payload)) return state; 

      return {
        ...state,
        favorite: [
          ...state.favorite,
          action.payload
        ]
      };
    }
    case DEL_FAV: {
      const index = state.favorite.indexOf(action.payload);

      return {
        ...state,
        favorite: [...state.favorite.slice(0, index), ...state.favorite.slice(index + 1)]
      };
    }
    default:
      return { ...state, beersList: [], favorite: [] };
  }
};

/** exports **/
export const actions = {
  GET_BEERS,
  BEERS_RECEIVED,
  BEERS_LOADING,
  ADD_FAV,
  DEL_FAV
};

export const actionCreators = {
  getBeers,
  beersReceived,
  beersLoading,
  addFav,
  delFav
};
