import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import combinedReducers from './schedule'
import thunk from 'redux-thunk'

const middleware = [thunk]

export const store = createStore(combinedReducers, composeWithDevTools(applyMiddleware(...middleware)))
