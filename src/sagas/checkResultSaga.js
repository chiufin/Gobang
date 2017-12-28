import ActionTypes from '../constants/ActionTypes';
// import _ from 'lodash';
import { all, take, call, select, put } from 'redux-saga/effects';

let winLogin = (board, newStep, player, ignore) => {
  console.log(player);
  //line
  let count = [0];
  for (let i = 0; i < board[newStep[0]].length; i++) {
    let piece = board[newStep[0]][i];
    if (piece === player) {
      count[count.length - 1] = count[count.length - 1] + 1;
      console.log('--- x');
    } else {
      count.push(0);
      console.log('--- ?');
    }
    console.log(count);
  }
  for (let i = 0; i < count.length; i++) {
    if (count[i] === 5) {
      return true;
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
    yield take(ActionTypes.CHECK_RESULT);
    const {
      CounterReducer: { board, newStep, player, ignore }
    } = yield select();
    let result = winLogin(board, newStep, player, ignore);
    if (result) {
      yield put({ type: 'CHANGE_GAME_RESULT', result: player });
    }
  }
}

export default function* rootSaga() {
  yield all([call(checkResult)]);
}
