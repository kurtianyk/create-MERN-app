import {
  takeEvery,
  call,
  put,
  all,
} from 'redux-saga/effects';

import api from 'Services/api';
import {
  fetchExampleSuccess,
  fetchExampleFailure,

  addExampleSuccess,
  addExampleFailure,

  updateExampleFailure,
  updateExampleSuccess,

  deleteExampleFailure,
  deleteExampleSuccess,
} from './actions';

import {
  EXAMPLE_FETCH_INIT,
  EXAMPLE_UPDATE_INIT,
  EXAMPLE_DELETE_INIT,
  EXAMPLE_ADD_INIT,
} from './constants';

export function* fetchExample() {
  try {
    const response = yield call(api.fetchExample);
    const { body } = response;
    yield put(fetchExampleSuccess(body));
  } catch (err) {
    yield put(fetchExampleFailure(err.message));
  }
}

export function* addExample(e, action) {
  try {
    const response = yield call(api.addExample, action.example);
    const { statusCode, body } = response;
    if (statusCode === 200) {
      yield put(addExampleSuccess(body));
    }
  } catch (err) {
    yield put(addExampleFailure(err.message));
  }
}

export function* updateExample(e, action) {
  try {
    const response = yield call(api.updateExample, action.exampleId, action.example);
    const { body } = response;
    yield put(updateExampleSuccess(body));
  } catch (err) {
    yield put(updateExampleFailure(err.message));
  }
}

export function* deleteExample(e, action) {
  try {
    const response = yield call(api.deleteExample, action.exampleId);
    const { statusCode, body } = response;
    if (statusCode === 200) {
      yield put(deleteExampleSuccess(body));
    }
  } catch (err) {
    yield put(deleteExampleFailure(err.message));
  }
}

export default function* rootSaga(payload) {
  yield all([
    takeEvery(EXAMPLE_FETCH_INIT, fetchExample, payload),
    takeEvery(EXAMPLE_ADD_INIT, addExample, payload),
    takeEvery(EXAMPLE_UPDATE_INIT, updateExample, payload),
    takeEvery(EXAMPLE_DELETE_INIT, deleteExample, payload),
  ]);
}
