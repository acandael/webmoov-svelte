import type { DrizzleD1Database } from 'drizzle-orm/d1';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { admin } from 'better-auth/plugins';

type Schema = typeof import('./server/db/schema');

export function createAuth(db: DrizzleD1Database<Schema>) {
	return betterAuth({
		database: drizzleAdapter(db, {
			provider: 'sqlite'
		}),
		emailAndPassword: {
			enabled: true,
			sendResetPassword: async ({ user, url, token }) => {
				console.log({ user, url, token });
			}
		},
		plugins: [admin()],
		user: {
			changeEmail: {
				enabled: true
			}
		}
	});
}

// const db = '';

// export const auth = betterAuth({
// 	database: drizzleAdapter(db, {
// 		provider: 'sqlite'
// 	}),
// 	emailAndPassword: {
// 		enabled: true,
// 		sendResetPassword: async ({ user, url, token }) => {
// 			console.log({ user, url, token });
// 		}
// 	},
// 	plugins: [admin()],
// 	user: {
// 		changeEmail: {
// 			enabled: true
// 		}
// 	}
// });
