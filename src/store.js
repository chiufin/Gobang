import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

// import { reducer as formReducer } from 'redux-form'
import CounterReducer from './reducers/CounterReducer'

import ActionTypes from './constants/ActionTypes'

export const configureStore = (history, initialState) => {

  
  const appReducer = combineReducers({
    CounterReducer,
    // form: formReducer,
    routing: routerReducer
  })

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const rootReducer = (state, action) => {
    if (action.type === ActionTypes.CLEAN_STORE) {
      state = Object.assign({}, state, {
    
      })
      // state = undefined
    }
    return appReducer(state, action)
  }



  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
    )
  )





  return store
}