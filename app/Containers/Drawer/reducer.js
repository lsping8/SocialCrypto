import { Map } from 'immutable'
import {
  SET_DRAWER
} from './constant'

const initialState = Map({
  open: false
})

const drawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DRAWER:
      return state
        .set('open', action.open)
    default:
      return state
  }
}

export default drawerReducer
