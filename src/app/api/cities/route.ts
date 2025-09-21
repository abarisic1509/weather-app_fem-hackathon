import { NextRequest, NextResponse } from 'next/server';
import rawCitiesData from '@/lib/staticData/cities.json';
import type { CitiesData, City } from '@/lib/types/city';

const citiesData = rawCitiesData as CitiesData;

// eslint-disable-next-line require-await
export async function GET(req: NextRequest) {
	const searchTerm = req.nextUrl.searchParams.get('search')?.trim().toLowerCase();

	if (!searchTerm) {
		return NextResponse.json({ error: 'Missing search query' }, { status: 400 });
	}

	const results: City[] = citiesData.cities.filter((city) => city.name.toLowerCase().includes(searchTerm));

	return NextResponse.json(results);
}
