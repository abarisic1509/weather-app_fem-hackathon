import { SelectedCity } from '@/lib/types/city';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GlobalState {
	selectedCity: SelectedCity | null;
	selectedMeasures: 'metric' | 'imperial' | 'mixed';
	individualMeasures: {
		temp: 'celsius' | 'fahrenheit';
		wind: 'kmh' | 'mph';
		precipitation: 'mm' | 'inches';
	};
}
type MeasureValue = {
	temp: 'celsius' | 'fahrenheit';
	wind: 'kmh' | 'mph';
	precipitation: 'mm' | 'inches';
};

type SetIndividualMeasurePayload = {
	type: 'temp' | 'wind' | 'precipitation';
	value: MeasureValue['temp'] | MeasureValue['wind'] | MeasureValue['precipitation'];
};

const initialState: GlobalState = {
	selectedCity: null,
	selectedMeasures: 'metric',
	individualMeasures: {
		temp: 'celsius',
		wind: 'kmh',
		precipitation: 'mm',
	},
};

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setSelectedCity(state, action: PayloadAction<SelectedCity | null>) {
			state.selectedCity = action.payload;
		},
		setSelectedMeasures(state, action: PayloadAction<'metric' | 'imperial' | 'mixed'>) {
			state.selectedMeasures = action.payload;
			if (action.payload === 'metric') {
				state.individualMeasures = {
					temp: 'celsius',
					wind: 'kmh',
					precipitation: 'mm',
				};
			} else if (action.payload === 'imperial') {
				state.individualMeasures = {
					temp: 'fahrenheit',
					wind: 'mph',
					precipitation: 'inches',
				};
			}
		},
		setIndividualMeasures(state, action: PayloadAction<SetIndividualMeasurePayload>) {
			const { type, value } = action.payload;

			if (type === 'temp' && (value === 'celsius' || value === 'fahrenheit')) {
				state.individualMeasures.temp = value;
			}
			if (type === 'wind' && (value === 'kmh' || value === 'mph')) {
				state.individualMeasures.wind = value;
			}
			if (type === 'precipitation' && (value === 'mm' || value === 'inches')) {
				state.individualMeasures.precipitation = value;
			}

			// After updating, check if all individual measures are imperial or metric
			const allMetric =
				state.individualMeasures.temp === 'celsius' &&
				state.individualMeasures.wind === 'kmh' &&
				state.individualMeasures.precipitation === 'mm';
			const allImperial =
				state.individualMeasures.temp === 'fahrenheit' &&
				state.individualMeasures.wind === 'mph' &&
				state.individualMeasures.precipitation === 'inches';

			if (allMetric) {
				state.selectedMeasures = 'metric';
			} else if (allImperial) {
				state.selectedMeasures = 'imperial';
			} else {
				state.selectedMeasures = 'mixed';
			}
		},
	},
});

export const { setSelectedCity, setSelectedMeasures, setIndividualMeasures } = globalSlice.actions;

export default globalSlice.reducer;
