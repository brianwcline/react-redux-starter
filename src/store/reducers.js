import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { HomeReducer as home} from '../routes/Home/modules/home'

export default combineReducers({
  router: routerReducer,
  home
})