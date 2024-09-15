import type { Elysia } from "elysia";
import { ProfileController } from "#/controllers/profile";

const profileController = new ProfileController();

export default (app: Elysia) => {
	return app
		.use(import("#/middleware/auth"))
		.group("/profile", (app) =>
			app
				.get("/", profileController.index)
				.put("/", profileController.update)
		);
};
