import { combineReducers } from 'redux'

import scheduleReducer from './schedule'

const reducers = {
  schedule: scheduleReducer,
}
export default combineReducers(reducers)