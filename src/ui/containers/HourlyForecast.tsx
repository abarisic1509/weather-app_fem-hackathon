import { HourlyForecastData } from '@/lib/types/forecast';
import DaySelect from '../components/DaySelect';
import ForecastCard from '../components/ForecastCard';
import { useState } from 'react';
import { dayCodes, forecastCodes } from '@/lib/helpers/constants';
import Image from 'next/image';
import { getHour } from '@/lib/helpers/formatters';
interface HourlyForecastProps {
	hourlyForecastData: HourlyForecastData[];
}

const groupByDayOfWeek = (data: HourlyForecastData[]) => {
	return data.reduce(
		(grouped, item) => {
			const date = new Date(item.time);

			const dayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);

			if (!grouped[dayName]) {
				grouped[dayName] = [];
			}
			grouped[dayName].push(item);

			return grouped;
		},
		{} as Record<string, HourlyForecastData[]>
	);
};

const HourlyForecast = ({ hourlyForecastData }: HourlyForecastProps) => {
	const groupedData = groupByDayOfWeek(hourlyForecastData);
	const date = new Date();
	const day = date.getDay();

	const [selectedDay, setSelectedDay] = useState<string>(dayCodes[day]);

	return (
		<section className="relative flex flex-col gap-4 bg-grey-800 pb-5 sm:pb-6 rounded-[1.25rem] max-h-[42rem] overflow-y-auto hourly">
			<div className="top-0 left-0 sticky flex justify-between items-center bg-grey-800 px-4 sm:px-6 py-5 sm:py-6">
				<h2 className="text-preset-5 text-white light:text-grey-900">Hourly forecast</h2>

				<DaySelect selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
			</div>
			<ul className="flex flex-col gap-4 px-4 sm:px-6">
				{selectedDay === '' ? (
					<li className="w-full text-preset-5-medium">Select a day to see forecast</li>
				) : (
					groupedData[selectedDay]?.map((item, i) => (
						<li key={`${item.time}-${i}`}>
							<ForecastCard type="hourly">
								<Image
									src={forecastCodes[item.weatherCode]?.icon}
									width={320}
									height={320}
									alt={forecastCodes[item.weatherCode]?.description}
									className="max-w-10"
								/>
								<h3 className="w-full text-preset-5-medium">{getHour(item.time)}</h3>
								<p className="text-preset-7">
									{item.temperature.toFixed(0)}
									{item.unit}
								</p>
							</ForecastCard>
						</li>
					))
				)}
			</ul>
		</section>
	);
};

export default HourlyForecast;
