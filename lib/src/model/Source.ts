import { BlockTypes } from "./Block";

export interface Source {
	name: string,
	colors: {
		[type in keyof BlockTypes]: string
	};
}
