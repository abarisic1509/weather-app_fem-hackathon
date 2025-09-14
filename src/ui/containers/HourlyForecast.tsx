import DaySelect from '../components/DaySelect';
import ForecastCard from '../components/ForecastCard';

const HourlyForecast = () => {
	return (
		<section className="flex flex-col gap-4 bg-grey-800 px-4 sm:px-6 py-5 sm:py-6 rounded-[1.25rem] hourly">
			<div className="flex justify-between items-center">
				<h2 className="text-preset-5 text-white light:text-grey-900">Hourly forecast</h2>

				<DaySelect />
			</div>
			<ul className="flex flex-col gap-4">
				<li>
					<ForecastCard type="hourly">
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-10" />
						<h3 className="w-full text-preset-5-medium">9 PM</h3>
						<p className="text-preset-7">17°</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="hourly">
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-10" />
						<h3 className="w-full text-preset-5-medium">9 PM</h3>
						<p className="text-preset-7">17°</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="hourly">
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-10" />
						<h3 className="w-full text-preset-5-medium">9 PM</h3>
						<p className="text-preset-7">17°</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="hourly">
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-10" />
						<h3 className="w-full text-preset-5-medium">9 PM</h3>
						<p className="text-preset-7">17°</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="hourly">
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-10" />
						<h3 className="w-full text-preset-5-medium">9 PM</h3>
						<p className="text-preset-7">17°</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="hourly">
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-10" />
						<h3 className="w-full text-preset-5-medium">9 PM</h3>
						<p className="text-preset-7">17°</p>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="hourly">
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-10" />
						<h3 className="w-full text-preset-5-medium">9 PM</h3>
						<p className="text-preset-7">17°</p>
					</ForecastCard>
				</li>
			</ul>
		</section>
	);
};

export default HourlyForecast;
