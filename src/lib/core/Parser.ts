import { Document } from "./model/Document.js";
import { Versions, defaultVersion } from "./Versions.js";

export abstract class Parser {
	public static parse(code: string, version: Versions = defaultVersion): Document {
		return Document.from(code, null, version)
	}
}
