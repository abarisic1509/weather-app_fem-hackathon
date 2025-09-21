import Image from 'next/image';
import ForecastCard from '../components/ForecastCard';
import { CurrentForecastData } from '@/lib/types/forecast';
import { formatDate } from '@/lib/helpers/formatters';
import { SelectedCity } from '@/lib/types/city';
import { countryCodes, forecastCodes } from '@/lib/helpers/constants';

interface CurrentForecastProps {
	currentForecastData: CurrentForecastData;
	selectedCity: SelectedCity;
}

const CurrentForecast = ({ currentForecastData, selectedCity }: CurrentForecastProps) => {
	return (
		<section className="flex flex-col gap-5 w-full current">
			<div className="bg-[url(/assets/images/bg-today-small.svg)] sm:bg-[url(/assets/images/bg-today-large.svg)] bg-cover bg-no-repeat bg-center px-6 py-20 rounded-[1.25rem] min-h-72">
				<div className="flex sm:flex-row flex-col sm:justify-between items-center gap-4">
					<div className="flex flex-col gap-3">
						<h2 className="text-preset-4 text-white">
							{selectedCity.name}, {countryCodes[selectedCity.countryCode]}
						</h2>
						<p className="text-white">{formatDate(currentForecastData.time)}</p>
					</div>
					<div className="flex items-center gap-5">
						<Image
							src={forecastCodes[currentForecastData.weatherCode]?.icon}
							width={320}
							height={320}
							alt={forecastCodes[currentForecastData.weatherCode]?.description}
							className="w-[7.5rem]"
						/>
						<p className="text-preset-1 text-white">
							{currentForecastData.temperature.value.toFixed(0)}
							{currentForecastData.temperature.unit}
						</p>
					</div>
				</div>
			</div>
			<ul className="gap-4 md:gap-5 xl:gap-6 grid grid-cols-2 md:grid-cols-4 w-full">
				<li>
					<ForecastCard type="current">
						<h3 className="text-grey-200 light:text-grey-600">Feels like</h3>
						<p className="text-preset-3 text-white light:text-grey-900">
							{currentForecastData.apparentTemperature.value.toFixed(0)}
							{currentForecastData.apparentTemperature.unit}
						</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="current">
						<h3 className="text-grey-200 light:text-grey-600">Humidity</h3>
						<p className="text-preset-3 text-white light:text-grey-900">
							{currentForecastData.relativeHumidity.value.toFixed(0)}
							{currentForecastData.relativeHumidity.unit}
						</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="current">
						<h3 className="text-grey-200 light:text-grey-600">Wind</h3>
						<p className="text-preset-3 text-white light:text-grey-900">
							{currentForecastData.windSpeed.value.toFixed(0)} {currentForecastData.windSpeed.unit}
						</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="current">
						<h3 className="text-grey-200 light:text-grey-600">Precipitation</h3>
						<p className="text-preset-3 text-white light:text-grey-900">
							{currentForecastData.precipitation.value.toFixed(0)} {currentForecastData.precipitation.unit}
						</p>
					</ForecastCard>
				</li>
			</ul>
		</section>
	);
};

export default CurrentForecast;
