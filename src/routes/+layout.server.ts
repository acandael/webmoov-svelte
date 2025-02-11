export const load = async ({ locals }) => {
	const { db } = locals;
	const users = await db.query.user.findMany();

	return {
		users
	};
};
