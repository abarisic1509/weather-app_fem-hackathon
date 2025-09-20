import { DailyForecastData } from '@/lib/types/forecast';
import ForecastCard from '../components/ForecastCard';
import { getDay } from '@/lib/helpers/formatters';
import { forecastCodes } from '@/lib/helpers/constants';
import Image from 'next/image';

interface DailyForecastProps {
	dailyForecastData: DailyForecastData[];
}

const DailyForecast = ({ dailyForecastData }: DailyForecastProps) => {
	return (
		<section className="flex flex-col gap-5 daily">
			<h2 className="text-preset-5 text-white light:text-grey-900">Daily forecast</h2>
			<ul className="gap-4 grid grid-cols-3 md:grid-cols-7">
				{dailyForecastData.map((item, i) => (
					<li key={`${item.time}-${i}`}>
						<ForecastCard type="daily">
							<h3 className="text-white light:text-grey-800">{getDay(item.time)}</h3>
							<Image
								src={forecastCodes[item.weatherCode]?.icon}
								width={320}
								height={320}
								alt={forecastCodes[item.weatherCode]?.description}
								className="max-w-[3.75rem]"
							/>
							<div className="flex justify-between items-center w-full">
								<p className="text-preset-7 text-white light:text-grey-900">
									<span className="sr-only">Max:</span>
									<span>
										{item.maxTemperature.toFixed(0)}
										{item.unit}
									</span>
								</p>
								<p className="text-grey-200 text-preset-7 light:text-grey-800">
									<span className="sr-only">Min:</span>
									<span>
										{item.minTemperature.toFixed(0)}
										{item.unit}
									</span>
								</p>
							</div>
						</ForecastCard>
					</li>
				))}
			</ul>
		</section>
	);
};

export default DailyForecast;
