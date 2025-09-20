import { SelectedCity } from '@/lib/types/city';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GlobalState {
	selectedCity: SelectedCity | null;
	selectedMeasures: 'metric' | 'imperial';
}

const initialState: GlobalState = {
	selectedCity: null,
	selectedMeasures: 'metric',
};

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setSelectedCity(state, action: PayloadAction<SelectedCity | null>) {
			state.selectedCity = action.payload;
		},
		setSelectedMeasures(state, action: PayloadAction<'metric' | 'imperial'>) {
			state.selectedMeasures = action.payload;
		},
	},
});

export const { setSelectedCity, setSelectedMeasures } = globalSlice.actions;

export default globalSlice.reducer;
