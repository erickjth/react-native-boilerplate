/* eslint-disable no-param-reassign */
import { createActions, createReducer } from 'reduxsauce';
import produce from 'immer';

/* ------------- Types and Action Creators ------------- */
export const { Types, Creators: Actions } = createActions({
	init: null,
	initSuccess: null,
	initFailure: ['error'],
}, { prefix: '@APP/' });

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
	isInitiated: false,
	error: null,
};

/* ------------- Hookup Reducers To Types ------------- */
export default createReducer(INITIAL_STATE, {
	[Types.INIT]: (state) => produce(state, draft => {
		draft.isInitiated = false;
		draft.error = null;
	}),

	[Types.INIT_SUCCESS]: (state) => produce(state, draft => {
		draft.isInitiated = true;
		draft.error = null;
	}),

	[Types.INIT_FAILURE]: (state, { error }) => produce(state, draft => {
		draft.isInitiated = false;
		draft.error = error;
	}),
});
/* eslint-enable no-param-reassign */
