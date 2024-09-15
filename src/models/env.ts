import { z } from "zod";

const jwtSecretSchema = z.string();
const jwtSecret = jwtSecretSchema.safeParse(Bun.env.JWT_SECRET);

if (jwtSecret.success === false) {
	throw new Error("SECRET não definido");
}

export const SECRET = jwtSecret.data;
