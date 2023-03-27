import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ data, url }) => {
	const { user } = data || {};
	if (user && url.pathname === '/auth/login') {
		throw redirect(307, '/')
	}
	if (!user && url.pathname !== '/auth/login') {
		throw redirect(307, '/auth/login')
	}

	return {user, title: 'Home Page'};
}