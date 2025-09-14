import Logo from '../../assets/Logo';

import SettingsMenu from './components/SettingsMenu';

const MainHeader = () => {
	return (
		<header className="flex justify-between items-center w-full">
			<Logo />

			<SettingsMenu />
		</header>
	);
};

export default MainHeader;
