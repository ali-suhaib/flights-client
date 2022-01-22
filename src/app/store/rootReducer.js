import { combineReducers } from '@reduxjs/toolkit';

const createReducer = asyncReducers => (state, action) => {
	const combinedReducer = combineReducers({
		...asyncReducers
	});

	return combinedReducer(state, action);
};

export default createReducer;