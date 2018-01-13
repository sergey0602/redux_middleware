import { all } from 'redux-saga/effects';
import firstData from './first';
import secondData from './second';
import getDataArray from './common';

export default function * rootSaga() {
  yield all([
    // firstData(),
    // secondData(),
    getDataArray()
  ])
}
