import { combineReducers } from 'redux'
import { reducer, allReducer } from './reducer'

export const rootReducer = combineReducers({
  reducer: reducer,
  allReducer: allReducer,
})

export default rootReducer
