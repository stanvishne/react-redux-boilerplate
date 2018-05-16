import { call, put } from 'redux-saga/effects';
import ApiAuth from './../api/auth';

export const loginSagaActions = {
  LOGIN: 'LOGIN'
};

export function* login(action) {
  const loginResponse = yield call(ApiAuth.login, action.values);

  // save the users in state
  yield put({
    type: 'LOGGEDIN',
    loggedin: loginResponse.logged,
  });
  if (loginResponse.logged) {
    action.callbackSuccess();
  } else {
    action.callbackError('wrong username or password');
  }
}
