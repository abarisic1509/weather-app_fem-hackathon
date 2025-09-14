import MainHeader from './ui/containers/MainHeader';
import SearchBar from './ui/containers/SearchBar';

function App() {
	return (
		<div className="flex flex-col flex-1 gap-12 xl:gap-16 mx-auto px-4 md:px-6 xl:px-28 pt-4 md:pt-6 xl:pt-12 pb-12 md:pb-20 w-full max-w-8xl">
			<MainHeader />
			<main className="flex flex-col flex-1 gap-8 xl:gap-12 mx-auto w-full max-w-8xl">
				<h1 className="mb-4 text-preset-2 text-white light:text-grey-900 text-center">
					How’s the sky looking today?
				</h1>

				<main className="flex flex-col gap-8 xl:gap-12">
					<SearchBar />

					<div className="gap-8 forecast-grid grid w-full">
						<section className="flex flex-col gap-5 w-full current">
							<div className="bg-grey-800">
								<h2>Current forecast</h2>
							</div>
							<ul className="gap-4 md:gap-5 xl:gap-6 grid grid-cols-2 md:grid-cols-4 w-full">
								<li className="bg-grey-800">Feels like</li>
								<li className="bg-grey-800">Humidity</li>
								<li className="bg-grey-800">Wind</li>
								<li className="bg-grey-800">Precipitation</li>
							</ul>
						</section>
						<section className="daily">
							<h2>Daily forecast</h2>
							<ul className="gap-4 grid grid-cols-3 md:grid-cols-7">
								<li className="bg-grey-800">1</li>
								<li className="bg-grey-800">2</li>
								<li className="bg-grey-800">3</li>
								<li className="bg-grey-800">4</li>
								<li className="bg-grey-800">5</li>
								<li className="bg-grey-800">6</li>
								<li className="bg-grey-800">7</li>
							</ul>
						</section>
						<section className="bg-grey-800 hourly">
							<h2>Hourly forecast</h2>
							<ul className="flex flex-col gap-4">
								<li className="bg-grey-700">1</li>
								<li className="bg-grey-700">2</li>
								<li className="bg-grey-700">3</li>
								<li className="bg-grey-700">4</li>
								<li className="bg-grey-700">5</li>
								<li className="bg-grey-700">6</li>
								<li className="bg-grey-700">7</li>
							</ul>
						</section>
					</div>
				</main>
			</main>
		</div>
	);
}

export default App;
