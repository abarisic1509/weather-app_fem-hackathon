import { FaChevronDown } from 'react-icons/fa6';
import { Combobox } from '@base-ui-components/react/combobox';

const days = [
	{ label: 'Select day', value: null },
	{ label: 'Monday', value: 'monday' },
	{ label: 'Tuesday', value: 'tuesday' },
	{ label: 'Wednesday', value: 'wednesday' },
	{ label: 'Thursday', value: 'thursday' },
	{ label: 'Friday', value: 'friday' },
	{ label: 'Saturday', value: 'saturday' },
	{ label: 'Sunday', value: 'sunday' },
];

const DaySelect = () => {
	return (
		<Combobox.Root items={days} modal={false}>
			<Combobox.Trigger className="flex justify-between items-center gap-3 bg-grey-600 light:bg-grey-200/50 hover:opacity-80 px-4 py-2 rounded-lg text-preset-7 text-white light:text-grey-800 cursor-pointer select-none">
				<Combobox.Value />
				<Combobox.Icon className="flex">
					<FaChevronDown />
				</Combobox.Icon>
			</Combobox.Trigger>
			<Combobox.Portal>
				<Combobox.Positioner align="end" sideOffset={8}>
					<Combobox.Popup className="group bg-grey-800 p-2 border border-grey-600 rounded-xl min-w-[13rem] text-preset-7 text-white">
						<Combobox.List>
							{days.map(({ label, value }) => (
								<Combobox.Item
									key={label}
									value={value}
									className="data-[highlighted]:bg-grey-700 px-2 py-2.5 rounded-lg cursor-default select-none"
								>
									<p>{label}</p>
								</Combobox.Item>
							))}
						</Combobox.List>
					</Combobox.Popup>
				</Combobox.Positioner>
			</Combobox.Portal>
		</Combobox.Root>
	);
};

export default DaySelect;
