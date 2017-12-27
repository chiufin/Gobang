import ActionTypes from '../constants/ActionTypes';
import { all, take, call, select } from 'redux-saga/effects';

function* checkResult() {
  while (true) {
    yield take(ActionTypes.CHECK_RESULT);
    // const { AppReducer: { popup: { condition } } } = yield select();
    console.log('CHECK_RESULT!!');
  }
}

export default function* rootSaga() {
  yield all([call(checkResult)]);
}
