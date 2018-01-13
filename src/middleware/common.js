import { put, takeEvery, call } from 'redux-saga/effects';
import {
  FIRST_REQUEST,
  FIRST_SUCCESS,
  FIRST_FAIL,
  SECOND_REQUEST,
  SECOND_SUCCESS,
  SECOND_FAIL
} from '../action_creators/actions';
import api from './api';

function * getDataArrayAsync(action) {
  if (action.type === FIRST_REQUEST) {
    try {
      const payload = yield call(api.getFirstData);
      yield put({ type: FIRST_SUCCESS, payload });
    } catch (e) {
      yield put({ type: FIRST_FAIL });
    }
  } else if (action.type === SECOND_REQUEST) {
    try {
      const payload = yield call(api.getSecondData);
      yield put({ type: SECOND_SUCCESS, payload });
    } catch (e) {
      yield put({ type: SECOND_FAIL });
    }
  }
}

export default function * getDataArray () {
  const actions = [FIRST_REQUEST, SECOND_REQUEST];
  yield takeEvery(actions, getDataArrayAsync);
}
