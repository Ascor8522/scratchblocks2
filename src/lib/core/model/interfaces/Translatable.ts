import { Languages } from "../../Languages.js";
import { Element } from "../Element.js";

export interface Translatable<T extends Element<any> | null, U extends Element<any>> { // TODO find a better way to write this
	translate(language: Languages, parent: T): U;
}
