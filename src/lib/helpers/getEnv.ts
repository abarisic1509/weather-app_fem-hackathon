/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export const getWeatherApiUrl = (): string => {
	const url: string | undefined = import.meta.env['VITE_WEATHER_API_URL'];

	if (!url) throw new Error('VITE_WEATHER_API_URL is not defined');

	return url;
};
