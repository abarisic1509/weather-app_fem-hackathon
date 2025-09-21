/* types for fetched data */
type CurrentForecastRes = {
	apparent_temperature: number;
	precipitation: number;
	relative_humidity_2m: number;
	temperature_2m: number;
	time: string;
	weather_code: number;
	wind_speed_10m: number;
	is_day: 0 | 1;
};
type CurrentForecastUnitsRes = {
	apparent_temperature: string;
	precipitation: string;
	relative_humidity_2m: string;
	temperature_2m: string;
	wind_speed_10m: string;
};
type DailyForecastRes = {
	temperature_2m_max: number[];
	temperature_2m_min: number[];
	time: string[];
	weather_code: number[];
};
type DailyForecastUnitsRes = {
	temperature_2m_max: string;
	temperature_2m_min: string;
};
type HourlyForecastRes = {
	temperature_2m: number[];
	time: string[];
	weather_code: number[];
};
type HourlyForecastUnitsRes = {
	temperature_2m: string;
};

export type ForecastRes = {
	current: CurrentForecastRes;
	current_units: CurrentForecastUnitsRes;
	daily: DailyForecastRes;
	daily_units: DailyForecastUnitsRes;
	hourly: HourlyForecastRes;
	hourly_units: HourlyForecastUnitsRes;
};

/* types for refactored data */
export type ForecastBase = {
	value: number;
	unit: string;
};
export type CurrentForecastData = {
	apparentTemperature: ForecastBase;
	precipitation: ForecastBase;
	relativeHumidity: ForecastBase;
	temperature: ForecastBase;
	windSpeed: ForecastBase;
	time: string;
	weatherCode: number;
	isDay: boolean;
};
export type DailyForecastData = {
	minTemperature: number;
	maxTemperature: number;
	time: string;
	unit: string;
	weatherCode: number;
};
export type HourlyForecastData = {
	temperature: number;
	time: string;
	weatherCode: number;
	unit: string;
};

export type ForecastData = {
	current: CurrentForecastData;
	daily: DailyForecastData[];
	hourly: HourlyForecastData[];
};
