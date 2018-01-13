import { put, takeEvery, call } from 'redux-saga/effects';
import { SECOND_REQUEST, SECOND_SUCCESS, SECOND_FAIL } from '../action_creators/actions';
import api from './api';

function * getSecondDataArrayAsync(action) {
  try {
    const payload = yield call(api.getSecondData);
    yield put({ type: SECOND_SUCCESS, payload });
  } catch (e) {
    yield put({ type: SECOND_FAIL });
  }
}

export default function * getSecondDataArray () {
  yield takeEvery(SECOND_REQUEST, getSecondDataArrayAsync);
}
