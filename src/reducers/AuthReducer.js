// import ActionTypes from '../constants/ActionTypes'
// import { updateObject, createReducer } from './reducerUtils'
import { createReducer } from './reducerUtils';

const initialState = {
  userName: '',
  role: ''
};

// const increment = (state, action) => updateObject(state, { num: state.num + 1 })
// const decrement = (state, action) => updateObject(state, { num: state.num - 1 })

export default createReducer(initialState, {
  // [ActionTypes.INCREASE]: increment,
  // [ActionTypes.DECREASE]: decrement
});
