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
    yield put(fetchExampleSuccess(response.data));
  } catch (err) {
    yield put(fetchExampleFailure(err.message));
  }
}

export function* addExample(e, action) {
  try {
    const response = yield call(api.addExample, action.example);
    if (response.ok) {
      yield put(addExampleSuccess(response.data));
    } else {
      yield put(addExampleFailure(response.data.msg));
    }
  } catch (err) {
    yield put(addExampleFailure(err.message));
  }
}

export function* updateExample(e, action) {
  try {
    const response = yield call(api.updateExample, action.exampleId, action.example);
    yield put(updateExampleSuccess(response.data));
  } catch (err) {
    yield put(updateExampleFailure(err.message));
  }
}

export function* deleteExample(e, action) {
  try {
    const response = yield call(api.deleteExample, action.exampleId);
    const { data, ok, problem } = response;
    if (ok) {
      yield put(deleteExampleSuccess(data));
    } else {
      yield put(deleteExampleFailure(problem));
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
