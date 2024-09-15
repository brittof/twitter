import { db } from "#/configs/conn";

import type { Authorize } from "#/models/authorize";
import type { Partial } from "#/models/user";

export class ProfileController {
	public async index({ authorize }: { authorize: Authorize }) {
		const payload = await authorize();

		return {
			user: payload
		};
	}

	public async update({
		body,
		authorize
	}: { body: Partial; authorize: Authorize }) {
		const payload = await authorize();
		const { verified, avatar, name } = body;

		const user = await db.user.update({
			where: {
				id: String(payload.userId)
			},
			data: {
				verified,
				avatar,
				name
			}
		});

		return {
			user
		};
	}
}
