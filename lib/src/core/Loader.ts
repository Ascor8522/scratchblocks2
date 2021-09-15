import { Document } from "./model/Document.js";

export abstract class Loader<T = unknown> {
	public abstract load(json: T): Document;
}
