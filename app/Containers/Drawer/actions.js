import {
  SET_DRAWER
} from './constant'

export const setDrawer = (dispatch) => (open) =>
  dispatch({
    type: SET_DRAWER,
    open
  })
