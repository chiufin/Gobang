import { all, fork } from 'redux-saga/effects';
import popupSaga from './popupSaga';
import checkResultSaga from './checkResultSaga';

export default function* root() {
  yield all([fork(popupSaga)]);
  yield all([fork(checkResultSaga)]);
}
