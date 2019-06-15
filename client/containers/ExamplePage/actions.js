import {
  EXAMPLE_FETCH_INIT,
  EXAMPLE_FETCH_SUCCESS,
  EXAMPLE_FETCH_FAILURE,

  EXAMPLE_ADD_INIT,
  EXAMPLE_ADD_SUCCESS,
  EXAMPLE_ADD_FAILURE,

  EXAMPLE_UPDATE_INIT,
  EXAMPLE_UPDATE_SUCCESS,
  EXAMPLE_UPDATE_FAILURE,

  EXAMPLE_DELETE_INIT,
  EXAMPLE_DELETE_SUCCESS,
  EXAMPLE_DELETE_FAILURE,
} from './constants';

export function fetchExampleInit(exampleId) {
  return {
    type: EXAMPLE_FETCH_INIT,
    exampleId,
  };
}

export function fetchExampleSuccess(example) {
  return {
    type: EXAMPLE_FETCH_SUCCESS,
    example,
  };
}

export function fetchExampleFailure(message) {
  return {
    type: EXAMPLE_FETCH_FAILURE,
    message,
  };
}

export function addExampleInit(example) {
  return {
    type: EXAMPLE_ADD_INIT,
    example,
  };
}

export function addExampleSuccess(example) {
  return {
    type: EXAMPLE_ADD_SUCCESS,
    example,
  };
}

export function addExampleFailure(message) {
  return {
    type: EXAMPLE_ADD_FAILURE,
    message,
  };
}

export function updateExampleInit(exampleId, example) {
  return {
    type: EXAMPLE_UPDATE_INIT,
    exampleId,
    example,
  };
}

export function updateExampleSuccess(example) {
  return {
    type: EXAMPLE_UPDATE_SUCCESS,
    example,
  };
}

export function updateExampleFailure(message) {
  return {
    type: EXAMPLE_UPDATE_FAILURE,
    message,
  };
}

export function deleteExampleInit(exampleId) {
  return {
    type: EXAMPLE_DELETE_INIT,
    exampleId,
  };
}

export function deleteExampleSuccess(example) {
  return {
    type: EXAMPLE_DELETE_SUCCESS,
    example,
  };
}

export function deleteExampleFailure(message) {
  return {
    type: EXAMPLE_DELETE_FAILURE,
    message,
  };
}
