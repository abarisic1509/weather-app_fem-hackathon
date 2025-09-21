'use client';

import { setIndividualMeasures, setSelectedMeasures } from '@/lib/store/slices/globalSlice';
import { RootState } from '@/lib/store/store';
import { Menu } from '@base-ui-components/react/menu';
import { FaCheck, FaChevronDown, FaGear } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';

const SettingsMenu = () => {
	const dispatch = useDispatch();
	const selectedUnit = useSelector((state: RootState) => state.global.selectedMeasures);
	const selectedIndividualUnits = useSelector((state: RootState) => state.global.individualMeasures);

	const handleUnitChange = (unit: 'imperial' | 'metric') => {
		dispatch(setSelectedMeasures(unit));
	};
	const handleIndividualUnitChange = (
		type: 'temp' | 'wind' | 'precipitation',
		value: 'celsius' | 'fahrenheit' | 'kmh' | 'mph' | 'mm' | 'inches'
	) => {
		dispatch(setIndividualMeasures({ type, value }));
	};

	return (
		<Menu.Root modal={false}>
			<Menu.Trigger
				className={
					'px-4 py-3 rounded-lg flex items-center gap-2.5 text-preset-7 text-white light:text-black bg-grey-800 hover:bg-grey-700 light:bg-white light:hover:bg-grey-200/50 light:outline light:outline-white outline-offset-2 cursor-pointer'
				}
				id="menuBtn"
			>
				<FaGear /> Units <FaChevronDown />
			</Menu.Trigger>
			<Menu.Portal>
				<Menu.Positioner sideOffset={8} align="end">
					<Menu.Popup
						className={
							'flex flex-col bg-grey-800 light:bg-white light:shadow-xl border border-grey-600 light:border-grey-200 px-2 py-1.5 gap-1 rounded-xl text-white light:text-black min-w-[13.25rem] text-preset-7'
						}
					>
						<Menu.Item
							className={
								'px-2 py-2.5 rounded-lg hover:bg-grey-700 light:hover:bg-grey-200/50 cursor-pointer outline outline-transparent focus:bg-grey-700  focus:outline-white outline-offset-2 light:focus:bg-grey-200/50 light:focus:outline-grey-900'
							}
							onClick={() => handleUnitChange(selectedUnit === 'metric' ? 'imperial' : 'metric')}
						>
							Switch to {selectedUnit === 'metric' ? 'Imperial' : 'Metric'}
						</Menu.Item>
						<Menu.Group className={'flex flex-col gap-1'}>
							<Menu.GroupLabel
								className={'px-2 pt-2.5 pb-1 text-preset-8 text-grey-300 light:text-grey-600/80 pointer-events-none'}
							>
								Temperature
							</Menu.GroupLabel>
							<Menu.Item
								className={`px-2 py-2.5 rounded-lg ${selectedIndividualUnits.temp === 'celsius' ? 'bg-grey-700' : 'hover:bg-grey-700 light:hover:bg-grey-200/50 cursor-pointer outline outline-transparent focus:bg-grey-700  focus:outline-white outline-offset-2 light:focus:bg-grey-200/50 light:focus:outline-grey-900'} flex items-center justify-between `}
								onClick={() => handleIndividualUnitChange('temp', 'celsius')}
							>
								<span>Celsius (°C)</span>
								{selectedIndividualUnits.temp === 'celsius' && <FaCheck />}
							</Menu.Item>
							<Menu.Item
								className={`px-2 py-2.5 rounded-lg ${selectedIndividualUnits.temp === 'fahrenheit' ? 'bg-grey-700' : 'hover:bg-grey-700 light:hover:bg-grey-200/50 cursor-pointer outline outline-transparent focus:bg-grey-700  focus:outline-white outline-offset-2 light:focus:bg-grey-200/50 light:focus:outline-grey-900'} flex items-center justify-between `}
								onClick={() => handleIndividualUnitChange('temp', 'fahrenheit')}
							>
								<span>Farenheit (°F)</span>
								{selectedIndividualUnits.temp === 'fahrenheit' && <FaCheck />}
							</Menu.Item>
						</Menu.Group>
						<Menu.Separator className={'bg-grey-600 light:bg-grey-200/50 h-px'} />
						<Menu.Group className={'flex flex-col gap-1'}>
							<Menu.GroupLabel
								className={'px-2 pt-2.5 pb-1 text-preset-8 text-grey-300 light:text-grey-600/80 pointer-events-none'}
							>
								Wind speed
							</Menu.GroupLabel>
							<Menu.Item
								className={`px-2 py-2.5 rounded-lg ${selectedIndividualUnits.wind === 'kmh' ? 'bg-grey-700' : 'hover:bg-grey-700 light:hover:bg-grey-200/50 cursor-pointer outline outline-transparent focus:bg-grey-700  focus:outline-white outline-offset-2 light:focus:bg-grey-200/50 light:focus:outline-grey-900'} flex items-center justify-between `}
								onClick={() => handleIndividualUnitChange('wind', 'kmh')}
							>
								<span>km/h</span>
								{selectedIndividualUnits.wind === 'kmh' && <FaCheck />}
							</Menu.Item>
							<Menu.Item
								className={`px-2 py-2.5 rounded-lg ${selectedIndividualUnits.wind === 'mph' ? 'bg-grey-700' : 'hover:bg-grey-700 light:hover:bg-grey-200/50 cursor-pointer outline outline-transparent focus:bg-grey-700  focus:outline-white outline-offset-2 light:focus:bg-grey-200/50 light:focus:outline-grey-900'} flex items-center justify-between `}
								onClick={() => handleIndividualUnitChange('wind', 'mph')}
							>
								<span>mph</span>
								{selectedIndividualUnits.wind === 'mph' && <FaCheck />}
							</Menu.Item>
						</Menu.Group>
						<Menu.Separator className={'bg-grey-600 light:bg-grey-200/50 h-px'} />
						<Menu.Group className={'flex flex-col gap-1'}>
							<Menu.GroupLabel
								className={'px-2 pt-2.5 pb-1 text-preset-8 text-grey-300 light:text-grey-600/80 pointer-events-none'}
							>
								Precipitation
							</Menu.GroupLabel>
							<Menu.Item
								className={`px-2 py-2.5 rounded-lg ${selectedIndividualUnits.precipitation === 'mm' ? 'bg-grey-700' : 'hover:bg-grey-700 light:hover:bg-grey-200/50 cursor-pointer outline outline-transparent focus:bg-grey-700  focus:outline-white outline-offset-2 light:focus:bg-grey-200/50 light:focus:outline-grey-900'} flex items-center justify-between `}
								onClick={() => handleIndividualUnitChange('precipitation', 'mm')}
							>
								<span>Millimeters (mm)</span>
								{selectedIndividualUnits.precipitation === 'mm' && <FaCheck />}
							</Menu.Item>
							<Menu.Item
								className={`px-2 py-2.5 rounded-lg ${selectedIndividualUnits.precipitation === 'inches' ? 'bg-grey-700' : 'hover:bg-grey-700 light:hover:bg-grey-200/50 cursor-pointer outline outline-transparent focus:bg-grey-700  focus:outline-white outline-offset-2 light:focus:bg-grey-200/50 light:focus:outline-grey-900'} flex items-center justify-between`}
								onClick={() => handleIndividualUnitChange('precipitation', 'inches')}
							>
								<span>Inches (in)</span>
								{selectedIndividualUnits.precipitation === 'inches' && <FaCheck />}
							</Menu.Item>
						</Menu.Group>
					</Menu.Popup>
				</Menu.Positioner>
			</Menu.Portal>
		</Menu.Root>
	);
};

export default SettingsMenu;
