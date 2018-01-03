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
  isCanvasSupported: null,
  result: null,
  board: initBoard(15, 15),
  playing: []
};

const isCanvasSupported = (state, action) =>
  updateObject(state, { isCanvasSupported: action.isCanvasSupport });

const newStep = (state, action) => {
  if (state.result === 'x' || state.result === 'o') {
    return updateImmutableObject(state, {});
  } else {
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
  }
};

const changeGameResult = (state, action) =>
  updateObject(state, { result: action.result });

export default createReducer(initialState, {
  [ActionTypes.IS_CANVAS_SUPPORTED]: isCanvasSupported,
  [ActionTypes.NEW_STEP]: newStep,
  [ActionTypes.CHANGE_GAME_RESULT]: changeGameResult
});
