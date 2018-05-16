import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { loginSagaActions, login } from './login';


// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, loginSagaActions.LOGIN, login)
  ];
}
