import { SPOTIFY_BASE_URL } from '$env/static/private';
import type { LayoutServerLoad } from './$types';
import { error, redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ cookies, fetch, url }) => {
	const accessToken = cookies.get('access_token');
	const refreshToken = cookies.get('refresh_token');
	if (!accessToken) {
		return {
			user: null
		};
	}
	const res = await fetch(`${SPOTIFY_BASE_URL}/me`, {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});
	if (res.ok) {
		const data = await res.json();
		return {
			user: data
		};
	}
	if (res.status === 401 && refreshToken) {
		const res = await fetch('/api/auth/refresh');
		if (res.ok) {
			throw redirect(307, url.pathname)
		}
		return {
			user: null
		}
	} else {
		return {
			user: null
		};
	}
};
