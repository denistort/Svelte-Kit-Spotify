import type { RequestHandler } from './$types';
import { redirect, json } from '@sveltejs/kit';

export const GET: RequestHandler = ({ cookies, request }) => {
	cookies.delete('refresh_token', { path: '/' });
	cookies.delete('access_token', { path: '/' });
	if (request.headers.get('accept') === 'application/json') {
		return json({ status: 'success' })
	} else {
		throw redirect(303, '/auth/login');
	}
};
