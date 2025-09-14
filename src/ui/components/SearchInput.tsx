import { Autocomplete } from '@base-ui-components/react/autocomplete';
import { FaSearch } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

interface Tag {
	id: string;
	value: string;
}

const tags: Tag[] = [
	{ id: 't1', value: 'feature' },
	{ id: 't2', value: 'fix' },
	{ id: 't3', value: 'bug' },
	{ id: 't4', value: 'docs' },
	{ id: 't5', value: 'internal' },
	{ id: 't6', value: 'mobile' },
	{ id: 'c-accordion', value: 'component: accordion' },
	{ id: 'c-alert-dialog', value: 'component: alert dialog' },
	{ id: 'c-autocomplete', value: 'component: autocomplete' },
	{ id: 'c-avatar', value: 'component: avatar' },
	{ id: 'c-checkbox', value: 'component: checkbox' },
	{ id: 'c-checkbox-group', value: 'component: checkbox group' },
];

const SearchInput = () => {
	return (
		<Autocomplete.Root items={tags}>
			<label className="grid grid-cols-[auto_1fr_auto] grid-rows-1 w-full text-grey-200 light:text-grey-600">
				<Autocomplete.Icon
					className={
						'col-span-1 row-span-1 col-start-1 col-end-2 row-start-1 row-end-2 h-full aspect-square grid place-items-center relative z-10'
					}
				>
					<FaSearch />
				</Autocomplete.Icon>
				<Autocomplete.Input
					placeholder="Search for a place..."
					className={`bg-grey-800 light:bg-grey-200/50 w-full rounded-xl py-4 px-[3.75rem]  text-preset-5-medium hover:bg-grey-700 light:hover:bg-grey-200/80 focus-within:bg-grey-800 light:focus-within:bg-grey-200/50 focus-within:outline focus-within:outline-white light:focus-within:outline-grey-900 focus-within:outline-offset-2 col-span-full col-start-1 -col-end-1 row-start-1 row-end-2`}
				/>
				<Autocomplete.Clear
					className={
						'-col-start-1 -col-end-2 h-full aspect-square grid place-items-center row-start-1 row-end-2'
					}
					tabIndex={0}
				>
					<FaX />
				</Autocomplete.Clear>
			</label>

			<Autocomplete.Portal>
				<Autocomplete.Positioner className="" sideOffset={10} align="start">
					<Autocomplete.Popup className="flex flex-col gap-1 bg-grey-800 light:bg-white light:shadow-xl p-2 border border-grey-700 light:border-grey-200 rounded-xl w-[var(--anchor-width)] max-w-[var(--available-width)] max-h-[min(var(--available-height),23rem)] overflow-y-auto overscroll-contain text-preset-7 text-white light:text-grey-900 scroll-pb-2 scroll-pt-2">
						<Autocomplete.Empty className="flex items-center gap-2.5 empty:m-0 empty:p-0 px-2 py-2.5">
							No results found.
						</Autocomplete.Empty>
						<Autocomplete.List className={'flex flex-col w-full gap-1'}>
							{(tag: Tag) => (
								<Autocomplete.Item
									key={tag.id}
									className="data-[highlighted]:bg-grey-700 hover:bg-grey-700 light:data-[highlighted]:bg-grey-200/50 light:hover:bg-grey-200/50 px-2 py-2.5 border data-[highlighted]:border-grey-600 hover:border-grey-600 light:data-[highlighted]:border-grey-200 light:hover:border-grey-200 border-transparent rounded-lg data-[highlighted]:outline data-[highlighted]:outline-white light:data-[highlighted]:outline-grey-900 data-[highlighted]:outline-offset-2 cursor-pointer select-none"
									value={tag}
								>
									{tag.value}
								</Autocomplete.Item>
							)}
						</Autocomplete.List>
					</Autocomplete.Popup>
				</Autocomplete.Positioner>
			</Autocomplete.Portal>
		</Autocomplete.Root>
	);
};

export default SearchInput;
