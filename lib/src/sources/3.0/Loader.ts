import { Loader as BaseLoader } from "../../core/Loader.js";
import { Document } from "../../core/model/Document.js";

export class Loader extends BaseLoader {
	public load(json: unknown): Document {
		throw new Error("Method not implemented.");
	}
}
