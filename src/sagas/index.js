import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { loginSagaActions, login } from './login';
import { nsiSaga, sagaActionTypes as nsiSagaActionTypes } from './nsi';



// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, loginSagaActions.LOGIN, login),
    fork(takeLatest, nsiSagaActionTypes.LOAD_NSI, nsiSaga),
  ];
}
