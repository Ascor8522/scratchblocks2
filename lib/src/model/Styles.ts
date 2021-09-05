import { Color } from "./Block";
import { Versions } from "./Versions";

export type Style = {
	colors: { [key in Versions]: Color };
}
