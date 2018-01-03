import ActionTypes from '../constants/ActionTypes';
import { all, take, call, select, put } from 'redux-saga/effects';
import {
  fiveInLine,
  fiveInRow,
  fiveFromTopLeft,
  fiveFromTopRight
} from '../utils/gobangWinLogic';

let winLogic = (board, playing, ignore) => {
  if (playing.length >= 9) {
    let { player, x, y } = playing[playing.length - 1];
    let lineResult = fiveInLine(board, player, y);
    let rowResult = fiveInRow(board, player, x);
    let leftTopResult = fiveFromTopLeft(board, player, x, y);
    let rightTopResult = fiveFromTopRight(board, player, x, y);
    if (lineResult || rowResult || leftTopResult || rightTopResult) {
      let { player } = playing[playing.length - 1];
      return player;
    }
  }
};

function* checkResult() {
  while (true) {
    yield take(ActionTypes.NEW_STEP);
    const { GameReducer: { board, ignore, playing } } = yield select();

    let winPlayer = winLogic(board, playing, ignore);
    if (winPlayer) {
      yield put({ type: 'CHANGE_GAME_RESULT', result: winPlayer });
    }
  }
}

export default function* rootSaga() {
  yield all([call(checkResult)]);
}
