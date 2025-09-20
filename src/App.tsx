import { useCallback, useState } from 'react';

import CurrentForecast from './ui/containers/CurrentForecast';
import DailyForecast from './ui/containers/DailyForecast';
import HourlyForecast from './ui/containers/HourlyForecast';
import MainHeader from './ui/containers/MainHeader';
import SearchBar from './ui/containers/SearchBar';
import type { CityLocation } from './lib/types/city';

function App() {
	const [selectedCity, setSelectedCity] = useState<CityLocation | null>(null);
	console.log('selectedCity', selectedCity);
	const handleCitySelection = useCallback((latitude: string, longitude: string) => {
		setSelectedCity({ latitude, longitude });
	}, []);

	return (
		<div className="flex flex-col flex-1 gap-12 xl:gap-16 mx-auto px-4 md:px-6 xl:px-28 pt-4 md:pt-6 xl:pt-12 pb-12 md:pb-20 w-full max-w-8xl">
			<MainHeader />
			<main className="flex flex-col flex-1 gap-8 xl:gap-12 mx-auto w-full max-w-8xl">
				<h1 className="mb-4 text-preset-2 text-white light:text-grey-900 text-center">
					How’s the sky looking today?
				</h1>

				<div className="flex flex-col gap-8 xl:gap-12">
					<SearchBar handleCitySelection={handleCitySelection} />

					<div className="gap-8 forecast-grid grid w-full">
						<CurrentForecast />
						<DailyForecast />
						<HourlyForecast />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
