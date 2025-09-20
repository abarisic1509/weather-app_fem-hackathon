import { useRef, useState } from 'react';

import SearchInput from '../components/SearchInput';
import type { City } from '../../lib/types/city';
import { getCity } from '../../lib/helpers/getCity';

interface SearchBarProps {
	handleCitySelection: (_lat: string, _lng: string) => void;
}

const SearchBar = ({ handleCitySelection }: SearchBarProps) => {
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [results, setResults] = useState<City[]>([]);
	const [searchState, setSearchState] = useState<'loading' | 'error' | null>('loading');
	const debounceTimer = useRef<NodeJS.Timeout | null>(null);

	const debounceSearch = (term: string) => {
		if (debounceTimer.current) {
			clearTimeout(debounceTimer.current);
		}

		debounceTimer.current = setTimeout(() => {
			setSearchState('loading');
			const res = getCity(term);
			if (!res) setSearchState('error');
			else setResults(res);
		}, 500);
	};

	const handleInputChange = (term: string) => {
		setSearchState(null);
		setSearchTerm(term);
		if (term.length >= 2) {
			debounceSearch(term);
		}
	};

	const handleResultClick = (city: City) => {
		setSearchTerm(city.name);
		handleCitySelection(city.lat, city.lng);
	};

	return (
		<form className="flex sm:flex-row flex-col justify-center items-center gap-3 md:gap-4 mx-auto w-full max-w-[41rem]">
			<SearchInput
				results={results}
				onInputChange={handleInputChange}
				onResultClick={handleResultClick}
				searchTerm={searchTerm}
				searchState={searchState}
			/>
			<button className="w-full sm:w-fit btn-text">Search</button>
		</form>
	);
};

export default SearchBar;
