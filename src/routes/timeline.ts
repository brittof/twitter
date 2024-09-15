import { t, type Elysia } from "elysia";

import { db } from "#/configs/conn";
import Auth from "#/middleware/auth";

export default (app: Elysia) => {
	return app
		.decorate("db", db)
		.use(Auth)
		.post(
			"/",
			async ({ body, db, authorize }) => {
				const { tweet } = body;
				const payload = await authorize();

				return await db.tweet.create({
					data: {
						tweet,
						userId: String(payload.userId)
					}
				});
			},
			{
				body: t.Object({
					tweet: t.String()
				})
			}
		)
		.get("/", async ({ db }) => {
			const user = await db.user.findFirst({
				select: {
					id: true,
					username: true,
					avatar: true,
					name: true,
					verified: true,

					tweets: {
						select: {
							id: true,
							tweet: true,
							createdAt: true,
							updatedAt: true
						}
					}
				},
				orderBy: {
					createdAt: "desc"
				}
			});

			return {
				user
			};
		});
};
