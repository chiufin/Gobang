import ActionTypes from '../constants/ActionTypes';
import _ from 'lodash';
import { all, take, call, select } from 'redux-saga/effects';

let winLogin = (board, newStep, player, ignore) => {
  //line
  for (let i = 0; i < board[newStep[0]].length; i++) {
    console.log(board[newStep[0]][i]);
    let continuousArr = [];
    let prev = board[newStep[0]][0];
    for (let j = 1; j < board[0].length; j++) {
      if (prev) {
      } else {
      }
      prev = board[newStep[0]][j];
    }
  }

  //row
  for (let j = 0; j < board[newStep[1]].length; j++) {
    console.log(board[j][newStep[1]]);
  }

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
    winLogin(board, newStep, player, ignore);
  }
}

export default function* rootSaga() {
  yield all([call(checkResult)]);
}
