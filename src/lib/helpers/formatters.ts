export const formatDate = (dateString: string): string => {
	const date = new Date(dateString);

	const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
	const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);

	const dayOfMonth = date.getDate();

	return `${dayOfWeek}, ${month} ${dayOfMonth}, ${date.getFullYear()}`;
};

export const getDay = (dateString: string): string => {
	const date = new Date(dateString);

	const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date);

	return `${dayOfWeek}`;
};
export const getHour = (dateString: string): string => {
	const date = new Date(dateString);
	let hours = date.getHours();
	const ampm = hours >= 12 ? 'PM' : 'AM';

	// Convert hours from 24-hour to 12-hour format
	hours = hours % 12;
	hours = hours ? hours : 12; // Handle midnight (0) as 12

	return `${hours} ${ampm}`;
};
