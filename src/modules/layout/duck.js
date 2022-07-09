/** action types **/
const prefix = 'layout';
const SET_ITEMS_PER_PAGE = `${prefix}/SET_ITEMS_PER_PAGE`;
const SET_PAGE_NUM = `${prefix}/SET_PAGE_NUM`;

/** action creators **/
const setItemsPerPage = (itemsPerPage) => ({
  type: SET_ITEMS_PER_PAGE,
  payload: { itemsPerPage }
});

const setPageNum = (pageNum) => ({
  type: SET_PAGE_NUM,
  payload: { pageNum }
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
    default:
      return {
        ...state, sideBarOpen: false
      };
  }
};

/** exports **/
export const actions = {
  SET_ITEMS_PER_PAGE,
  SET_PAGE_NUM
};

export const actionCreators = {
  setItemsPerPage,
  setPageNum
};
