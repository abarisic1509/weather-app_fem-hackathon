import type React from 'react';

interface ForecastCardProps {
	type: 'current' | 'daily' | 'hourly';
	children: React.ReactNode;
}

interface Styles {
	current: string;
	daily: string;
	hourly: string;
}

const ForecastCard = ({ type, children }: ForecastCardProps) => {
	const globalStyles = `border border-grey-600 flex`;
	const sharedColorsStyles: string =
		'bg-grey-800  rounded-xl light:bg-white light:border-grey-200 flex-col';
	const typeStyles: Styles = {
		current: `${globalStyles} ${sharedColorsStyles} p-5 gap-6`,
		daily: `${globalStyles} ${sharedColorsStyles} px-2.5 py-3 gap-4 items-center`,
		hourly: `${globalStyles} bg-grey-700 rounded-lg items-center gap-2 py-2.5 pl-3 pr-4 light:bg-grey-200/20 light:border-grey-300`,
	};
	return <article className={`${typeStyles[type]}`}>{children}</article>;
};

export default ForecastCard;
