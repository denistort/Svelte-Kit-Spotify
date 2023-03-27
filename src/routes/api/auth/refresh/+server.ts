import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private';
import type { RequestHandler } from './$types';
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies, fetch }) => {
	const refreshToken = cookies.get('refresh_token');

	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString(
				'base64'
			)}`
		}, 
		body: new URLSearchParams({
			grant_type: 'refresh_token',
			refresh_token: refreshToken || ''
		})
	});

	const data = await response.json();
	if (data.error) {
		cookies.delete('refresh_token', { path: '/' });
		cookies.delete('access_token', { path: '/' });
		throw error(401, {...data.error })
	}
	console.log(data, "REFRESH TOKEN RESPONSE")
	cookies.set('access_token', data.access_token, { path: '/'})

	return json(data)
};
