import SearchInput from '../components/SearchInput';

const SearchBar = () => {
	return (
		<form className="flex sm:flex-row flex-col justify-center items-center gap-3 md:gap-4 mx-auto w-full max-w-[41rem]">
			<SearchInput />
			<button className="w-full sm:w-fit btn-text">Search</button>
		</form>
	);
};

export default SearchBar;
