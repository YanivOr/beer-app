/** action types **/
const prefix = 'layout';
const SET_ITEMS_PER_PAGE = `${prefix}/SET_ITEMS_PER_PAGE`;
const SET_PAGE_NUM = `${prefix}/SET_PAGE_NUM`;
const TOGGLE_SIDEBAR = `${prefix}/TOGGLE_SIDEBAR`;

/** action creators **/
const setItemsPerPage = (itemsPerPage) => ({
  type: SET_ITEMS_PER_PAGE,
  payload: { itemsPerPage }
});

const setPageNum = (pageNum) => ({
  type: SET_PAGE_NUM,
  payload: { pageNum }
});

const toggleSideBar = () => ({
  type: TOGGLE_SIDEBAR,
});

/** reducer **/
export const layout = (state = {}, action) => {
  switch (action.type) {
    case SET_ITEMS_PER_PAGE: {
      return {
        ...state,
        itemsPerPage: action.payload.itemsPerPage
      };
    }
    case SET_PAGE_NUM: {
      return {
        ...state,
        pageNum: action.payload.pageNum
      };
    }
    case TOGGLE_SIDEBAR: {
      return {
        ...state,
        // sideBarOpen: !state.sideBarOpen
      };
    }
    default:
      return {
        ...state, sideBarOpen: false
      };
  }
};

/** exports **/
export const actions = {
  SET_ITEMS_PER_PAGE,
  SET_PAGE_NUM,
  TOGGLE_SIDEBAR
};

export const actionCreators = {
  setItemsPerPage,
  setPageNum,
  toggleSideBar
};
