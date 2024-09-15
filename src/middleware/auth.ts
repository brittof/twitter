import type { Elysia } from "elysia";

import jwt from "#/configs/jwt";

export default (app: Elysia) => {
	return app.use(jwt).derive(({ jwt, headers }) => ({
		authorize: async () => {
			const token = headers.authorization?.split(" ")[1];

			if (!token) throw new Error("Token não encontrado");

			try {
				const payload = await jwt.verify(token);

				if (!payload) throw new Error("Token inválido");

				return payload;
			} catch {
				throw new Error("Token inválido ou expirado");
			}
		}
	}));
};
