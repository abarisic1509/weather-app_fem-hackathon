export const getBaseUrl = (): string => {
	const url: string | undefined = process.env['NEXT_PUBLIC_BASE_URL'];

	if (!url) throw new Error('NEXT_PUBLIC_BASE_URL is not defined');

	return url;
};
export const getWeatherApiUrl = (): string => {
	const url: string | undefined = process.env['NEXT_PUBLIC_WEATHER_API_URL'];

	if (!url) throw new Error('NEXT_PUBLIC_WEATHER_API_URL is not defined');

	return url;
};
