import { all, takeLatest, put } from 'redux-saga/effects';
import { Actions, Types } from 'state/modules/app';

/**
 * Initial app handler
 */
function* init() {
	try {
		yield put(Actions.initSuccess());
	} catch (e) {
		yield put(Actions.initFailure('Ops! Something went wrong!'));
	}
}

/**
 * App watcher
 */
export function* watchApp() {
	yield all([
		yield takeLatest(Types.INIT, init),
	]);
}
