import type { RequestHandler } from './$types';
import { error, redirect } from '@sveltejs/kit';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, BASE_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ url, cookies, fetch }) => {
	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');
	const stateFromCookies = cookies.get('spotify_auth_state');
	const verifier = cookies.get('spotify_auth_challenge_verifier');

	cookies.delete('spotify_auth_state')
	cookies.delete('spotify_auth_challenge_verifier')

	if (!state || state !== stateFromCookies) {
		throw error(400, 'State mismatch');
	}

	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(
				`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`
			).toString('base64')}`
		},
		body: new URLSearchParams({
			code: code || '',
			redirect_uri: `${BASE_URL}/api/auth/callback`,
			grant_type: 'authorization_code',
			code_verifier: verifier || '',
			client_id: SPOTIFY_CLIENT_ID
		})
	});

	const data = await response.json();
	if (data.error) {
		throw error(400, data.error)
	}


	cookies.set('refresh_token', data.refresh_token, { path: '/' });
	cookies.set('access_token', data.access_token, { path: '/' });

	throw redirect(303, '/')
};
