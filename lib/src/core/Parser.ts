import { Document } from "./model/Document";
import { Versions, defaultVersion } from "./Versions";

export abstract class Parser {

	private constructor() {
		
	}

	public static parse(code: string, version: Versions = defaultVersion): Document {
		return Document.from(code, null, version)
	}

}
