import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',

	dbCredentials: {
		url: '.wrangler/state/v3/d1/miniflare-D1DatabaseObject/d0454e95493767b77e0d4980df300f2a44295a819e48d1e36977a2e2554a416c.sqlite'
	},

	verbose: true,
	strict: true,
	dialect: 'sqlite',
	out: './migrations'
});
