import type { JWTPayloadSpec } from "@elysiajs/jwt";

export type Authorize = () => Promise<
	Record<string, string | number> & JWTPayloadSpec
>;
