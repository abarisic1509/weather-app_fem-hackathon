import { MainHeader } from './ui/components';

function App() {
	return (
		<div className="flex flex-col flex-1 gap-12 xl:gap-16 mx-auto px-4 md:px-6 xl:px-28 pt-4 md:pt-6 xl:pt-12 pb-12 md:pb-20 w-full max-w-8xl">
			<MainHeader />
			<h1 className="text-preset-2 text-white light:text-grey-900 text-center">
				How’s the sky looking today?
			</h1>
		</div>
	);
}

export default App;
