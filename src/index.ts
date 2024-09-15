import Elysia from "elysia";
import cors from "@elysiajs/cors";

import * as router from "#/routes";

new Elysia()
	.onStart(() => console.log("🏄‍♂️ Twitter"))
	.use(
		cors({
			credentials: true
		})
	)
	.use(router.auth)
	.use(router.profile)
	.use(router.timeline)
	.listen(3333);
