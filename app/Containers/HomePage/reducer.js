import { Map } from 'immutable'
import {
  SET_SEARCH
} from './constant'

const initialState = Map({
  focus: false
})

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return state
        .set('focus', action.focus)
    default:
      return state
  }
}

export default homePageReducer
