export type User = {
	id: string;
	username: string;
	password: string;
	avatar: string;
	name: string;
	verified: boolean;
};

export type Partial = Omit<User, "id" | "password" | "username">;
