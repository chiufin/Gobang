import ActionTypes from '../constants/ActionTypes';
import {
  updateObject,
  updateImmutableObject,
  createReducer
} from '../utils/reducerUtils';

let initBoard = (line, row) => {
  let board = [];
  let oneLine = [];
  for (let i = 0; i < line; i++) {
    oneLine.push(null);
  }
  for (let j = 0; j < row; j++) {
    board.push(oneLine);
  }
  return board;
};

const initialState = {
  result: null,
  board: initBoard(15, 15),
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

  return updateImmutableObject(state, {
    playing: {
      $push: [
        {
          player: thisPlayer,
          x: action.x,
          y: action.y
        }
      ]
    },
    board: {
      [action.y]: {
        [action.x]: { $set: thisPlayer }
      }
    }
  });
};

const changeGameResult = (state, action) =>
  updateObject(state, { result: action.result });

export default createReducer(initialState, {
  [ActionTypes.NEW_STEP]: newStep,
  [ActionTypes.CHANGE_GAME_RESULT]: changeGameResult
});
