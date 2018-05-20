import { call, put } from 'redux-saga/effects';
import nsi from './../api/getNsi';
import { nsiActions } from './../actions/nsiActions';

export const sagaActionTypes = {
	LOAD_NSI: 'LOAD_NSI'
};

export const loadNsiSagaAction = () => ({
	type: sagaActionTypes.LOAD_NSI
});

export function* nsiSaga(action) {
	const dnet = yield call(nsi.getDNet);
	const dcargo = yield call(nsi.getCargo);
	/**
	 * TODO Make it assync
	 */
	yield put(nsiActions.dnetLoaded(dnet));
	yield put(nsiActions.dcargoLoaded(dcargo));
};

