import ActionTypes from '../constants/ActionTypes';
// import _ from 'lodash';
import { all, take, call, select, put } from 'redux-saga/effects';
import { fiveInLine } from '../utils/gobangWinLogic';

let winLogic = (board, playing, ignore) => {
  console.log('winLogic');
  console.log(board);
  if (playing.length >= 9) {
    let lineResult = fiveInLine(board, playing);
    if (lineResult) {
      let { player } = playing[playing.length - 1];
      return player;
    }
  }
  //row
  // for (let j = 0; j < board[newStep[1]].length; j++) {
  //   console.log(board[j][newStep[1]]);
  // }

  //leftTop -> rightBottom
  // console.log(ignore)
  // console.log(newStep)
  // let findResult = _.includes(ignore.leftTop_rightBottom, newStep);
  // console.log(findResult)
};

function* checkResult() {
  while (true) {
    yield take(ActionTypes.NEW_STEP);
    const { CounterReducer: { board, ignore, playing } } = yield select();

    let winPlayer = winLogic(board, playing, ignore);
    if (winPlayer) {
      yield put({ type: 'CHANGE_GAME_RESULT', result: winPlayer });
    }
  }
}

export default function* rootSaga() {
  yield all([call(checkResult)]);
}
