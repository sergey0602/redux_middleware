import { all } from 'redux-saga/effects';
import firstDataAsync from './first';
import secondDataAsync from './second';

export default function * rootSaga() {
  yield all([
    firstDataAsync(),
    secondDataAsync()
  ])
}
