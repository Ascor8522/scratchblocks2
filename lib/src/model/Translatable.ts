import { LocaleLang } from "./Locale";

export interface Translatable {
	translate(language: LocaleLang): Translatable;
}
