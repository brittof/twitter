import { t, type Elysia } from "elysia";

import { db } from "#/configs/conn";
import Auth from "#/middleware/auth";

export default (app: Elysia) => {
	return app
		.use(Auth)
		.decorate("db", db)
		.post(
			"/signup",
			async ({ body, db }) => {
				const { username, password, avatar, name } = body;

				const hash = await Bun.password.hash(password, {
					algorithm: "bcrypt",
					cost: 10
				});

				try {
					await db.user.create({
						data: {
							username,
							password: hash,
							avatar,
							name
						}
					});
				} catch {
					throw new Error("Usuário já existe");
				}
			},
			{
				body: t.Object({
					username: t.String(),
					password: t.String(),
					avatar: t.String(),
					name: t.String()
				})
			}
		)
		.post(
			"/login",
			async ({ jwt, body, db }) => {
				const { username, password } = body;

				const user = await db.user.findUnique({
					where: {
						username
					}
				});

				if (!user) {
					throw new Error("Usuário não encontrado");
				}

				const isPasswordValid = await Bun.password.verify(
					password,
					user.password
				);

				if (!isPasswordValid) {
					throw new Error("Senha incorreta");
				}

				const token = await jwt.sign({
					userId: user.id,
					username: user.username,
					avatar: user.avatar,
					name: user.name
				});

				return {
					user: {
						id: user.id,
						username: user.username,
						avatar: user.avatar,
						name: user.name
					},
					token
				};
			},
			{
				body: t.Object({
					username: t.String(),
					password: t.String()
				})
			}
		);
};
