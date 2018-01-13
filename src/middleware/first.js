import { put, takeEvery, call } from 'redux-saga/effects';
import { FIRST_REQUEST, FIRST_SUCCESS, FIRST_FAIL } from '../action_creators/actions';
import api from './api';

function * getFirstDataArrayAsync(action) {
  try {
    const payload = yield call(api.getFirstData);
    yield put({ type: FIRST_SUCCESS, payload });
  } catch (e) {
    yield put({ type: FIRST_FAIL });
  }
}

export default function * getFirstDataArray () {
  yield takeEvery(FIRST_REQUEST, getFirstDataArrayAsync);
}
