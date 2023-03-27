import type { RequestHandler } from './$types';
import { SPOTIFY_BASE_URL } from '$env/static/private';
import { json, error } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies, fetch, params, url }) => {
	const accessToken = cookies.get('access_token');
	const res = await fetch(`${SPOTIFY_BASE_URL}/${params.path}${url.search}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${accessToken}` || '',
			'Content-type': 'application/json'
		}
	});
	if (res.ok) {
		const data = await res.json();
		return json(data);
	} else {
		throw error(res.status);
	}
};
