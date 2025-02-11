import { redirect, type Handle } from '@sveltejs/kit';
import { createAuth } from '$lib/auth';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { createDb } from '$lib/server/db';
import { sequence } from '@sveltejs/kit/hooks';

const protectedRoutes = ['/admin'];
const handleAuth: Handle = async ({ event, resolve }) => {
	const { locals, url, request } = event;
	const { db } = locals;
	const auth = createAuth(db);
	const session = await auth.api.getSession({
		headers: request.headers
	});

	if (url.pathname.startsWith('/admin') && session?.user.role !== 'admin') {
		redirect(303, '/');
	}

	const isProtectedRoute = protectedRoutes.some((route) => url.pathname.startsWith(route));

	if (isProtectedRoute && !session) {
		redirect(303, '/');
	}

	return svelteKitHandler({ event, resolve, auth });
};

const handleDb: Handle = async ({ event, resolve }) => {
	const platform = event.platform;

	if (platform) {
		const db = createDb(platform.env.DB);
		event.locals.db = db;
	}

	return resolve(event);
};

export const handle = sequence(handleDb, handleAuth);
