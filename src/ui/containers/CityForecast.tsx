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
import { FaBan, FaRotate } from 'react-icons/fa6';
import DaySelect from '../components/DaySelect';

const CityForecast = () => {
	const selectedCity = useSelector((state: RootState) => state.global.selectedCity);
	const selectedUnit = useSelector((state: RootState) => state.global.selectedMeasures);

	const [forecastState, setForecastState] = useState<'loading' | 'empty' | 'error' | null>(null);
	const [forecastData, setForecastData] = useState<ForecastData | null>(null);

	useEffect(() => {
		const getForecast = async () => {
			setForecastState('loading');
			const baseUrl = getWeatherApiUrl();

			try {
				const res = await fetch(
					`${baseUrl}/forecast?latitude=${selectedCity?.latitude}&longitude=${selectedCity?.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,apparent_temperature,is_day,precipitation,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto${selectedUnit === 'imperial' ? '&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch' : ''}`,
					{
						method: 'GET',
					}
				);
				const data: ForecastRes = await res.json();

				if (!data) setForecastState('empty');
				else {
					setForecastData(refactorForecastData(data));
					setForecastState(null);
				}
			} catch (error) {
				setForecastState('error');
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
				<h2 className="text-preset-4 text-center">Select the city to see forecast</h2>
			</div>
		);

	if (forecastState === 'loading')
		return (
			<div className="gap-8 forecast-grid grid w-full">
				<section className="flex flex-col gap-5 w-full current">
					<div className="place-items-center grid bg-grey-800 px-6 py-20 rounded-[1.25rem] min-h-72">
						<div className="flex flex-col justify-center items-center gap-3.5">
							<svg width="56" height="16" viewBox="0 0 56 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<circle opacity="0.8" cx="6" cy="10" r="6" fill="white" />
								<circle opacity="0.8" cx="28" cy="6" r="6" fill="white" />
								<circle opacity="0.8" cx="50" cy="10" r="6" fill="white" />
							</svg>
							<p className="text-grey-200 text-preset-6 light:text-grey-700">Loading</p>
						</div>
					</div>
					<ul className="gap-4 md:gap-5 xl:gap-6 grid grid-cols-2 md:grid-cols-4 w-full">
						<li className="flex flex-col gap-6 bg-grey-800 light:bg-white p-5 border border-grey-600 light:border-grey-200 rounded-xl">
							<h3 className="text-grey-200 light:text-grey-600">Feels like</h3>
							<p className="text-preset-3 text-white light:text-grey-900">-</p>
						</li>
						<li className="flex flex-col gap-6 bg-grey-800 light:bg-white p-5 border border-grey-600 light:border-grey-200 rounded-xl">
							<h3 className="text-grey-200 light:text-grey-600">Humidity</h3>
							<p className="text-preset-3 text-white light:text-grey-900">-</p>
						</li>
						<li className="flex flex-col gap-6 bg-grey-800 light:bg-white p-5 border border-grey-600 light:border-grey-200 rounded-xl">
							<h3 className="text-grey-200 light:text-grey-600">Wind</h3>
							<p className="text-preset-3 text-white light:text-grey-900">-</p>
						</li>
						<li className="flex flex-col gap-6 bg-grey-800 light:bg-white p-5 border border-grey-600 light:border-grey-200 rounded-xl">
							<h3 className="text-grey-200 light:text-grey-600">Precipitation</h3>
							<p className="text-preset-3 text-white light:text-grey-900">-</p>
						</li>
					</ul>
				</section>
				<section className="flex flex-col gap-5 daily">
					<h2 className="text-preset-5 text-white light:text-grey-900">Daily forecast</h2>
					<ul className="gap-4 grid grid-cols-3 md:grid-cols-7">
						<li className="flex flex-col items-center gap-4 bg-grey-800 light:bg-white px-2.5 py-3 border border-grey-600 light:border-grey-200 rounded-xl min-h-40"></li>
						<li className="flex flex-col items-center gap-4 bg-grey-800 light:bg-white px-2.5 py-3 border border-grey-600 light:border-grey-200 rounded-xl min-h-40"></li>
						<li className="flex flex-col items-center gap-4 bg-grey-800 light:bg-white px-2.5 py-3 border border-grey-600 light:border-grey-200 rounded-xl min-h-40"></li>
						<li className="flex flex-col items-center gap-4 bg-grey-800 light:bg-white px-2.5 py-3 border border-grey-600 light:border-grey-200 rounded-xl min-h-40"></li>
						<li className="flex flex-col items-center gap-4 bg-grey-800 light:bg-white px-2.5 py-3 border border-grey-600 light:border-grey-200 rounded-xl min-h-40"></li>
						<li className="flex flex-col items-center gap-4 bg-grey-800 light:bg-white px-2.5 py-3 border border-grey-600 light:border-grey-200 rounded-xl min-h-40"></li>
						<li className="flex flex-col items-center gap-4 bg-grey-800 light:bg-white px-2.5 py-3 border border-grey-600 light:border-grey-200 rounded-xl min-h-40"></li>
					</ul>
				</section>
				<section className="relative flex flex-col gap-4 bg-grey-800 pb-5 sm:pb-6 rounded-[1.25rem] max-h-[42rem] overflow-y-auto hourly">
					<div className="top-0 left-0 sticky flex justify-between items-center bg-grey-800 px-4 sm:px-6 py-5 sm:py-6">
						<h2 className="text-preset-5 text-white light:text-grey-900">Hourly forecast</h2>

						<DaySelect showEmpty />
					</div>
					<ul className="flex flex-col gap-4 px-4 sm:px-6">
						<li className="flex items-center gap-2 bg-grey-700 light:bg-grey-200/20 py-2.5 pr-4 pl-3 border border-grey-600 light:border-grey-300 rounded-lg min-h-[3.75rem]"></li>
						<li className="flex items-center gap-2 bg-grey-700 light:bg-grey-200/20 py-2.5 pr-4 pl-3 border border-grey-600 light:border-grey-300 rounded-lg min-h-[3.75rem]"></li>
						<li className="flex items-center gap-2 bg-grey-700 light:bg-grey-200/20 py-2.5 pr-4 pl-3 border border-grey-600 light:border-grey-300 rounded-lg min-h-[3.75rem]"></li>
						<li className="flex items-center gap-2 bg-grey-700 light:bg-grey-200/20 py-2.5 pr-4 pl-3 border border-grey-600 light:border-grey-300 rounded-lg min-h-[3.75rem]"></li>
						<li className="flex items-center gap-2 bg-grey-700 light:bg-grey-200/20 py-2.5 pr-4 pl-3 border border-grey-600 light:border-grey-300 rounded-lg min-h-[3.75rem]"></li>
						<li className="flex items-center gap-2 bg-grey-700 light:bg-grey-200/20 py-2.5 pr-4 pl-3 border border-grey-600 light:border-grey-300 rounded-lg min-h-[3.75rem]"></li>
						<li className="flex items-center gap-2 bg-grey-700 light:bg-grey-200/20 py-2.5 pr-4 pl-3 border border-grey-600 light:border-grey-300 rounded-lg min-h-[3.75rem]"></li>
					</ul>
				</section>
			</div>
		);
	if (forecastState === 'empty')
		return (
			<div className="flex flex-col gap-20 w-full">
				<h2 className="text-preset-4 text-center">No search results found</h2>
			</div>
		);
	if (forecastState === 'error')
		return (
			<div className="flex flex-col items-center gap-6 w-full">
				<FaBan className="text-grey-300 light:text-grey-700" />
				<h2 className="text-preset-2 text-center">Something went wrong</h2>
				<p className="text-grey-200 light:text-grey-800">
					We couldn’t connect to the server (API error). Please try again in a few moments.
				</p>

				<button className="flex items-center gap-2.5 bg-grey-800 hover:bg-grey-800/70 light:bg-grey-200 light:hover:bg-grey-300 px-4 py-3 rounded-lg text-white light:text-grey-900 cursor-pointer">
					<FaRotate />
					<span>Retry</span>
				</button>
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
