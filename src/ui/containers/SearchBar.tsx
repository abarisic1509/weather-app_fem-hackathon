'use client';

import { useCallback, useRef, useState } from 'react';

import SearchInput from '../components/SearchInput';
import type { City } from '../../lib/types/city';
import { useDispatch } from 'react-redux';
import { setSelectedCity } from '@/lib/store/slices/globalSlice';
import { getBaseUrl } from '@/lib/helpers/getEnv';

const SearchBar = () => {
	const dispatch = useDispatch();
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [results, setResults] = useState<City[]>([]);
	const [searchState, setSearchState] = useState<'loading' | 'error' | null>('loading');
	const debounceTimer = useRef<NodeJS.Timeout | null>(null);

	const debounceSearch = () => {
		if (debounceTimer.current) {
			clearTimeout(debounceTimer.current);
		}

		debounceTimer.current = setTimeout(() => {
			setSearchState('loading');
			getCities();
		}, 500);
	};

	const handleInputChange = useCallback((term: string) => {
		setSearchState(null);
		setSearchTerm(term);
		if (term.length >= 2) {
			debounceSearch();
		}
	}, []);

	const handleResultClick = useCallback(
		(city: City) => {
			setSearchTerm(city.name);
			dispatch(setSelectedCity({ latitude: city.lat, longitude: city.lng, name: city.name }));
		},
		[
			/* handleCitySelection */
		]
	);

	const handleClear = useCallback(() => {
		setSearchTerm('');
		setSearchState(null);
		setResults([]);
	}, []);

	const getCities = async () => {
		const baseUrl = getBaseUrl();

		try {
			const res = await fetch(`${baseUrl}/api/cities?search=${searchTerm}`, {
				method: 'GET',
			});
			const data = await res.json();
			if (data.length === 0) {
				setSearchState('error');
			} else {
				setResults(data);
			}
		} catch (error) {
			setSearchState('error');
		}
	};

	return (
		<form className="flex sm:flex-row flex-col justify-center items-center gap-3 md:gap-4 mx-auto w-full max-w-[41rem]">
			<SearchInput
				results={results}
				onInputChange={handleInputChange}
				onResultClick={handleResultClick}
				searchTerm={searchTerm}
				searchState={searchState}
				handleClear={handleClear}
			/>
			<button className="w-full sm:w-fit btn-text">Search</button>
		</form>
	);
};

export default SearchBar;
