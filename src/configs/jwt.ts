import jwt from "@elysiajs/jwt";
import { SECRET } from "#/models/env";

export default jwt({
	name: "jwt",
	secret: SECRET,
	exp: "7d"
});
