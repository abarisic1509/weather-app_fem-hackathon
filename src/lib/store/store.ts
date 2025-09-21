import { configureStore } from '@reduxjs/toolkit';
import globalReducer, { GlobalState } from './slices/globalSlice';

export interface RootState {
	global: GlobalState;
}

const store = configureStore({
	reducer: {
		global: globalReducer,
	},
});

export default store;
