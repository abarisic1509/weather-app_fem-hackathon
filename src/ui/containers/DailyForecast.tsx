import ForecastCard from '../components/ForecastCard';

const DailyForecast = () => {
	return (
		<section className="flex flex-col gap-5 daily">
			<h2 className="text-preset-5 text-white light:text-grey-900">Daily forecast</h2>
			<ul className="gap-4 grid grid-cols-3 md:grid-cols-7">
				<li>
					<ForecastCard type="daily">
						<h3 className="text-white light:text-grey-800">Tue</h3>
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-[3.75rem]" />
						<div className="flex justify-between items-center w-full">
							<p className="text-preset-7 text-white light:text-grey-900">
								<span className="sr-only">Max:</span>
								<span>20°</span>
							</p>
							<p className="text-grey-200 text-preset-7 light:text-grey-800">
								<span className="sr-only">Min:</span>
								<span>12°</span>
							</p>
						</div>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="daily">
						<h3 className="text-white light:text-grey-800">Tue</h3>
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-[3.75rem]" />
						<div className="flex justify-between items-center w-full">
							<p className="text-preset-7 text-white light:text-grey-900">
								<span className="sr-only">Max:</span>
								<span>20°</span>
							</p>
							<p className="text-grey-200 text-preset-7 light:text-grey-800">
								<span className="sr-only">Min:</span>
								<span>12°</span>
							</p>
						</div>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="daily">
						<h3 className="text-white light:text-grey-800">Tue</h3>
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-[3.75rem]" />
						<div className="flex justify-between items-center w-full">
							<p className="text-preset-7 text-white light:text-grey-900">
								<span className="sr-only">Max:</span>
								<span>20°</span>
							</p>
							<p className="text-grey-200 text-preset-7 light:text-grey-800">
								<span className="sr-only">Min:</span>
								<span>12°</span>
							</p>
						</div>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="daily">
						<h3 className="text-white light:text-grey-800">Tue</h3>
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-[3.75rem]" />
						<div className="flex justify-between items-center w-full">
							<p className="text-preset-7 text-white light:text-grey-900">
								<span className="sr-only">Max:</span>
								<span>20°</span>
							</p>
							<p className="text-grey-200 text-preset-7 light:text-grey-800">
								<span className="sr-only">Min:</span>
								<span>12°</span>
							</p>
						</div>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="daily">
						<h3 className="text-white light:text-grey-800">Tue</h3>
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-[3.75rem]" />
						<div className="flex justify-between items-center w-full">
							<p className="text-preset-7 text-white light:text-grey-900">
								<span className="sr-only">Max:</span>
								<span>20°</span>
							</p>
							<p className="text-grey-200 text-preset-7 light:text-grey-800">
								<span className="sr-only">Min:</span>
								<span>12°</span>
							</p>
						</div>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="daily">
						<h3 className="text-white light:text-grey-800">Tue</h3>
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-[3.75rem]" />
						<div className="flex justify-between items-center w-full">
							<p className="text-preset-7 text-white light:text-grey-900">
								<span className="sr-only">Max:</span>
								<span>20°</span>
							</p>
							<p className="text-grey-200 text-preset-7 light:text-grey-800">
								<span className="sr-only">Min:</span>
								<span>12°</span>
							</p>
						</div>
					</ForecastCard>
				</li>
				<li>
					<ForecastCard type="daily">
						<h3 className="text-white light:text-grey-800">Tue</h3>
						<img src="/assets/images/icon-drizzle.webp" alt="Drizzle" className="max-w-[3.75rem]" />
						<div className="flex justify-between items-center w-full">
							<p className="text-preset-7 text-white light:text-grey-900">
								<span className="sr-only">Max:</span>
								<span>20°</span>
							</p>
							<p className="text-grey-200 text-preset-7 light:text-grey-800">
								<span className="sr-only">Min:</span>
								<span>12°</span>
							</p>
						</div>
					</ForecastCard>
				</li>
			</ul>
		</section>
	);
};

export default DailyForecast;
