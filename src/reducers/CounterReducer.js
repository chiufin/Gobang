import ActionTypes from '../constants/ActionTypes';
import { updateObject, createReducer } from './reducerUtils';

const initialState = {
  player: 'x',
  result: null,
  board: [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
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
  }
};

const newStep = (state, action) => {
  state.board[action.newStep[1]][action.newStep[0]] = state.player;

  let nextPlayer = '';
  if (state.player === 'x') {
    nextPlayer = 'o';
  } else if (state.player === 'o') {
    nextPlayer = 'x';
  }

  return updateObject(state, { newStep: action.newStep, player: nextPlayer });
};

const changeGameResult = (state, action) =>
  updateObject(state, { result: action.result });

export default createReducer(initialState, {
  [ActionTypes.NEW_STEP]: newStep,
  [ActionTypes.CHANGE_GAME_RESULT]: changeGameResult
});
