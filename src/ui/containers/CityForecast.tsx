'use client';
import React, { useEffect, useState } from 'react';
import CurrentForecast from './CurrentForecast';
import DailyForecast from './DailyForecast';
import HourlyForecast from './HourlyForecast';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { getWeatherApiUrl } from '@/lib/helpers/getEnv';
import {
	CurrentForecastData,
	DailyForecastData,
	ForecastBase,
	ForecastData,
	ForecastRes,
	HourlyForecastData,
} from '@/lib/types/forecast';

const CityForecast = () => {
	const selectedCity = useSelector((state: RootState) => state.global.selectedCity);
	const selectedUnit = useSelector((state: RootState) => state.global.selectedMeasures);

	const [forecastData, setForecastData] = useState<ForecastData | null>(null);

	useEffect(() => {
		const getForecast = async () => {
			const baseUrl = getWeatherApiUrl();

			try {
				const res = await fetch(
					`${baseUrl}/forecast?latitude=${selectedCity?.latitude}&longitude=${selectedCity?.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,is_day,precipitation,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto${selectedUnit === 'imperial' ? '&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch' : ''}`,
					{
						method: 'GET',
					}
				);
				const data: ForecastRes = await res.json();
				setForecastData(refactorForecastData(data));
			} catch (error) {
				console.error('error', error);
			}
		};

		if (selectedCity && selectedUnit) {
			getForecast();
		}
	}, [selectedCity, selectedUnit]);

	const refactorForecastData = (forecastRes: ForecastRes): ForecastData => {
		const createForecastBase = (value: number, unit: string): ForecastBase => ({
			value,
			unit,
		});

		const current: CurrentForecastData = {
			apparentTemperature: createForecastBase(
				forecastRes.current.apparent_temperature,
				forecastRes.current_units.apparent_temperature
			),
			precipitation: createForecastBase(forecastRes.current.precipitation, forecastRes.current_units.precipitation),
			relativeHumidity: createForecastBase(
				forecastRes.current.relative_humidity_2m,
				forecastRes.current_units.relative_humidity_2m
			),
			temperature: createForecastBase(forecastRes.current.temperature_2m, forecastRes.current_units.temperature_2m),
			windSpeed: createForecastBase(forecastRes.current.wind_speed_10m, forecastRes.current_units.wind_speed_10m),
			time: forecastRes.current.time,
			weatherCode: forecastRes.current.weather_code,
			isDay: forecastRes.current.is_day === 1,
		};

		const daily: DailyForecastData[] = forecastRes.daily.time.map((time, index) => ({
			minTemperature: forecastRes.daily.temperature_2m_min[index],
			maxTemperature: forecastRes.daily.temperature_2m_max[index],
			time,
			unit: forecastRes.daily_units.temperature_2m_max,
			weatherCode: forecastRes.daily.weather_code[index],
		}));

		const hourly: HourlyForecastData[] = forecastRes.hourly.time.map((time, index) => ({
			temperature: forecastRes.hourly.temperature_2m[index],
			time,
			weatherCode: forecastRes.hourly.weather_code[index],
			unit: forecastRes.hourly_units.temperature_2m,
		}));

		return {
			current,
			daily,
			hourly,
		};
	};

	if (!forecastData || !selectedCity)
		return (
			<div className="flex flex-col gap-20 w-full">
				<h2 className="text-preset-5 text-center">Select the city to see forecast</h2>
			</div>
		);

	return (
		<div className="gap-8 forecast-grid grid w-full">
			<CurrentForecast currentForecastData={forecastData.current} selectedCity={selectedCity} />
			<DailyForecast dailyForecastData={forecastData.daily} />
			<HourlyForecast hourlyForecastData={forecastData.hourly} />
		</div>
	);
};

export default CityForecast;
