import ForecastCard from '../components/ForecastCard';

const CurrentForecast = () => {
	return (
		<section className="flex flex-col gap-5 w-full current">
			<div className="bg-[url(/assets/images/bg-today-small.svg)] sm:bg-[url(/assets/images/bg-today-large.svg)] bg-cover bg-no-repeat bg-center px-6 py-20 rounded-[1.25rem] min-h-72">
				<div className="flex sm:flex-row flex-col sm:justify-between items-center gap-4">
					<div className="flex flex-col gap-3">
						<h2 className="text-preset-4 text-white">Berlin, Germany</h2>
						<p className="text-white">Tuesday, Aug 5, 2025</p>
					</div>
					<div className="flex items-center gap-5">
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="w-[7.5rem]" />
						<p className="text-preset-1 text-white">38°</p>
					</div>
				</div>
			</div>
			<ul className="gap-4 md:gap-5 xl:gap-6 grid grid-cols-2 md:grid-cols-4 w-full">
				<li>
					<ForecastCard type="current">
						<h3 className="text-grey-200 light:text-grey-600">Feels like</h3>
						<p className="text-preset-3 text-white light:text-grey-900">18°</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="current">
						<h3 className="text-grey-200 light:text-grey-600">Humidity</h3>
						<p className="text-preset-3 text-white light:text-grey-900">46%</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="current">
						<h3 className="text-grey-200 light:text-grey-600">Wind</h3>
						<p className="text-preset-3 text-white light:text-grey-900">14 km/h</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="current">
						<h3 className="text-grey-200 light:text-grey-600">Precipitation</h3>
						<p className="text-preset-3 text-white light:text-grey-900">0 mm</p>
					</ForecastCard>
				</li>
			</ul>
		</section>
	);
};

export default CurrentForecast;
