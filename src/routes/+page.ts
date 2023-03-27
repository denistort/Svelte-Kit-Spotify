import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/api/spotify/browse/new-releases?limit=5');
	const res2 = await fetch('/api/spotify/browse/featured-playlists?limit=5');

	return { newReleases: await res.json(), featuredPlaylist: await res2.json() };
};
