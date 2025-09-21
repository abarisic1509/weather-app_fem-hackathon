export type City = {
	name: string;
	lat: string;
	lng: string;
	country: string;
};
export type CitiesData = {
	cities: City[];
};

export type SelectedCity = {
	latitude: string;
	longitude: string;
	name: string;
	countryCode: string;
};
