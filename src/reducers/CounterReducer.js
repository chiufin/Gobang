import ActionTypes from '../constants/ActionTypes';
import { updateObject, createReducer } from './reducerUtils';

const initialState = {
  player: 'x',
  result: null,
  board: [
    ['x', 'x', 'x', 'x', 'x'],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, 'o', null, null],
    [null, null, null, null, null]
  ],
  num: 1
};

const increment = (state, action) =>
  updateObject(state, { num: state.num + 1 });
const decrement = (state, action) =>
  updateObject(state, { num: state.num - 1 });

export default createReducer(initialState, {
  [ActionTypes.INCREASE]: increment,
  [ActionTypes.DECREASE]: decrement
});
