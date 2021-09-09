import { Attributes } from "../../utils/Attributes";
import { Renderer } from "../Renderer";
import { Versions } from "../Versions";

export abstract class Element<T extends ThisType<Element<T>> | null> {
	private _parent: T;
	private _version: Versions;

	protected constructor({ parent, version }: Attributes<Element<T>> & { parent: Element<T>["_parent"] }) {
		this._parent = parent;
		this._version = version;
	}

	public get parent(): Element<T>["_parent"] {
		return this._parent;
	}

	public get version(): Element<T>["_version"] {
		return this._version;
	}
	
}
