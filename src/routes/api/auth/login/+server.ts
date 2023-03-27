import type { RequestHandler } from './$types';
import { redirect } from '@sveltejs/kit';
import pkce from 'pkce-gen';

import { SPOTIFY_CLIENT_ID, BASE_URL } from '$env/static/private';
const spotifyAuthorizeUrl = 'https://accounts.spotify.com/authorize?';

const scopes = [
	// Images
	'ugc-image-upload',
	// Spotify Connect
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing',
	// Playback
	'app-remote-control',
	'streaming',
	// Playlists
	'playlist-read-private',
	'playlist-read-collaborative',
	'playlist-modify-private',
	'playlist-modify-public',
	// Follow
	'user-follow-modify',
	'user-follow-read',
	// Listening History
	'user-read-playback-position',
	'user-top-read',
	'user-read-recently-played',
	// Library
	'user-library-modify',
	'user-library-read',
	// Users
	'user-read-email',
	'user-read-private'
]
export const GET: RequestHandler = ({ cookies }) => {
	const challenge = pkce.create();
	const state = crypto.randomUUID();
	cookies.set('spotify_auth_state', state)
	cookies.set('spotify_auth_challenge_verifier', challenge.code_verifier)

	throw redirect(307, spotifyAuthorizeUrl + new URLSearchParams({
		response_type: 'code',
		client_id: SPOTIFY_CLIENT_ID,
		scope: scopes.join(' '),
		redirect_uri: `${BASE_URL}/api/auth/callback`,
		state,
		code_challenge_method: 'S256',
		challenge: challenge.code_challenge
	}))
}