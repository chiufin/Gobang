import ActionTypes from '../constants/ActionTypes';
import { all, take, call, select, put } from 'redux-saga/effects';
import { fiveInLine } from '../utils/gobangWinLogic';

let winLogic = (board, playing, ignore) => {
  if (playing.length >= 9) {
    let lineResult = fiveInLine(board, playing);
    if (lineResult) {
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
