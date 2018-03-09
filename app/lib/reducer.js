import { combineReducers } from 'redux'
import firstReducer from './reducers/firstReducer'
import homePageReducer from '../Containers/HomePage/reducer'
import drawerReducer from '../Containers/Drawer/reducer'

export default function getReducer (client) {
  return combineReducers({
    apollo: client.reducer(),
    firstReducer,
    homePageReducer,
    drawerReducer
  })
}
