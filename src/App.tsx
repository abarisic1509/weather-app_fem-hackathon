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
				</main>
			</main>
		</div>
	);
}

export default App;
