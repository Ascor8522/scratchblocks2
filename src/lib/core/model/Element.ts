import { Attributes } from "../../utils/Attributes.js";
import { Languages } from "../Languages.js";
import { Source } from "../Source";
import { sources, Versions } from "../Versions.js";

export abstract class Element<T extends ThisType<Element<T>> | null> { // TODO find a better way to write this
	private _parent: T;
	private _version: Versions;
	private _source: Source;

	public constructor({ parent, version }: Omit<Attributes<Element<T>>, "source"> & { parent: Element<T>["_parent"] }) { // TODO find why it doesn't work with Attributes<> only
		this._parent = parent;
		this._version = version;
		this._source = sources[version];
	}

	public get parent(): Element<T>["_parent"] {
		return this._parent;
	}

	public set parent(parent: T) {
		this._parent = parent;
	}

	public get version(): Element<T>["_version"] {
		return this._version;
	}

	public get source(): Element<T>["_source"] {
		return this._source;
	}

	public abstract getLanguage(): Languages;
	
}
