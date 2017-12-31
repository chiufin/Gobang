import ActionTypes from '../constants/ActionTypes';
import { updateObject, createReducer } from '../utils/reducerUtils';

const initialState = {
  result: null,
  board: [
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null]
  ],
  playing: [],
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
  console.log(action);
  let thisPlayer = null;
  let playingLen = state.playing.length;
  if (playingLen < 1) {
    thisPlayer = 'x';
  } else if (state.playing[playingLen - 1].player === 'o') {
    thisPlayer = 'x';
  } else if (state.playing[playingLen - 1].player === 'x') {
    thisPlayer = 'o';
  }

  return updateObject(state, {
    playing: [
      {
        player: thisPlayer,
        x: action.x,
        y: action.y
      }
    ]
  });
};

const changeGameResult = (state, action) =>
  updateObject(state, { result: action.result });

export default createReducer(initialState, {
  [ActionTypes.NEW_STEP]: newStep,
  [ActionTypes.CHANGE_GAME_RESULT]: changeGameResult
});
