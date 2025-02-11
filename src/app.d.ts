import type { DrizzleD1Database } from 'drizzle-orm/d1'; // See https://svelte.dev/docs/kit/
// types#app.d.ts
// for information about these interfaces
type Schema = typeof import('$lib/server/db/schema');
declare global {
	namespace App {
		interface Platform {
			env: {
				DB: D1Database;
				BUCKET: R2Bucket;
			};
			cf: CfProperties;
			ctx: ExecutionContext;
		}
		interface Locals {
			db: DrizzleD1Database<Schema>;
			bucket: R2Bucket;
		} // interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
