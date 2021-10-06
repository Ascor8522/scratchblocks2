import { Loader as BaseLoader } from "../../core/Loader.js";
import { Document } from "../../core/model/Document.js";
import { Versions } from "../../core/Versions";
import { Project } from "./Project";

export class Loader extends BaseLoader {
	public load(json: Project): Document {
		const doc = new Document({
			parent: null,
			version: Versions.SCRATCH_3_0,
			stacks: [],
		});
		return doc;
	}
}
