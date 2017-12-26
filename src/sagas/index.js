import { all, fork } from 'redux-saga/effects';
import popupSaga from './popupSaga';

export default function* root() {
  yield all([fork(popupSaga)]);
}
