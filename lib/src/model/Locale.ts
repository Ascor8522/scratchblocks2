import { BlockTypes } from "./Block";

export interface LocaleBlock {
	id: string;
	string: string;
	replaced: string;
	category: BlockTypes;
}

export interface LocaleIcon {
	id: string;
	path: string;
}

export const enum LocaleInputTypes {
	NUMBER = "number",
	TEXT = "text",
	BOOLEAN = "boolean",
}

export interface LocaleInput {
	type: LocaleInputTypes;
	symbol: string;
	start: string;
	end: string;
}

export interface Locale {
	blocks: LocaleBlock[];
	icons: LocaleIcon[];
	inputs: LocaleInput[];
}

export type LocaleLang = string;
