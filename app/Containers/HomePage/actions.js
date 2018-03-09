import {
  SET_SEARCH
} from './constant'

export const setSearch = (dispatch) => (focus) =>
  dispatch({
    type: SET_SEARCH,
    focus
  })
