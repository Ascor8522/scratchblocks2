import { LocaleLang } from "../../Source";

export interface Translatable {
	translate(language: LocaleLang): Translatable;
}
