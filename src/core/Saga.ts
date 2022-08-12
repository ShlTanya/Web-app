import { all } from 'redux-saga/effects';

import { postsSaga } from './sagas/PostsSaga';

export function* rootSaga() {
  try {
    yield all([postsSaga()]);
  } catch (e) {
    // console.log({ e });
  }
}
