import ActionTypes from '../constants/ActionTypes';
// import _ from 'lodash';
import { all, take, call, select, put } from 'redux-saga/effects';

let winLogic = (board, newStep, player, ignore) => {
  //minor than 9 steps, don't need to check
  console.log(player);
  console.log(newStep);
  //line
  let count = [0];
  for (let i = 0; i < board[newStep[1]].length; i++) {
    console.log(`piece: ${board[newStep[1]][i]}`);
    let piece = board[newStep[1]][i];
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
    const { newStep } = yield take(ActionTypes.NEW_STEP);
    const { CounterReducer: { board, ignore, playing } } = yield select();
    let player = '';
    console.log(playing);
    // if(playing.length === 0){
    //   player = 'x'
    // }else if(playing[playing.length-1].player === 'o'){
    //   player = 'x'
    // }else if(playing[playing.length-1].player === 'x'){
    //   player = 'o'
    // }
    // let result = winLogic(board, newStep, player, ignore);
    // if (result) {
    //   yield put({ type: 'CHANGE_GAME_RESULT', result: player });
    // }
  }
}

export default function* rootSaga() {
  yield all([call(checkResult)]);
}
