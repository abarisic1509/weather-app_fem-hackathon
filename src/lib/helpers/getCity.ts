import rawCitiesData from '../staticData/cities.json';
import type { CitiesData, City } from '../types/city';

const citiesData = rawCitiesData as CitiesData;

export const getCity = (searchTerm: string): City[] | null => {
	const sanitiezed: string = searchTerm.trim().toLowerCase();
	if (sanitiezed === '') return null;

	const result: City[] = citiesData.cities.filter((city: City) =>
		city.name.toLowerCase().includes(sanitiezed)
	);

	if (result.length === 0) return null;

	return result;
};
