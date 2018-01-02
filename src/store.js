import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas';

import GameReducer from './reducers/GameReducer';
import PopupReducer from './reducers/PopupReducer';

import ActionTypes from './constants/ActionTypes';

export const configureStore = (history, initialState) => {
  const appReducer = combineReducers({
    GameReducer,
    PopupReducer,
    routing: routerReducer
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const rootReducer = (state, action) => {
    if (action.type === ActionTypes.CLEAN_STORE) {
      state = Object.assign({}, state, {});
      // state = undefined
    }
    return appReducer(state, action);
  };

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk, sagaMiddleware, routerMiddleware(history))
    )
  );

  sagaMiddleware.run(mySaga);

  return store;
};
