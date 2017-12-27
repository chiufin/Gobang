import ActionTypes from '../constants/ActionTypes';
import { updateObject, createReducer } from './reducerUtils';

const initialState = {
  player: 'x',
  result: null,
  board: [
    ['x', 'x', 'x', 'x', 'x'],
    ['o', 'o', null, null, null],
    [null, null, null, null, null],
    [null, null, 'o', null, null],
    [null, null, null, 'o', 'o']
  ],
  newStep: [0, 1],
  ignore: {
    leftTop_rightBottom: [
      [1, 0],
      [2, 0],
      [2, 1],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4]
    ],
    rightTop_leftBottom: [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]
  },
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
