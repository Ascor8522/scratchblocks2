import { Attributes } from "../utils/Attributes";
import { Block } from "./Block";
import { Element } from "./Element";
import { Explainable } from "./Explainable";
import { LocaleLang } from "./Locale";
import { Renderable } from "./Renderable";
import { Renderer } from "./Renderer";
import { Translatable } from "./Translatable";
import { Versions } from "./Versions";

export const enum InputTypes {
	BOOLEAN = "boolean",
	NUMBER = "number",
	TEXT = "text",
	BLOCK = "block",
}

export class Input extends Element<Block> implements Explainable, Translatable, Renderable {

	private _type: InputTypes;
	private _value: string | Block;

	public static from(sourceCode: string, parent: Block, version: Versions): Input {
		let type;
		let value;
		throw new Error("Method not implemented.");
		return new Input({ parent, version, type, value });
	}

	private constructor({ parent, version, type, value }: Attributes<Input>) {
		super({ parent, version });
		this._type = type;
		this._value = value;
	}

	public get type(): Input["_type"] {
		return this._type;
	}

	public get value(): Input["_value"] {
		return this._value;
	}

	public explain(indentLevel: number): string {
		return "\t".repeat(indentLevel) + "Input:" + "\n";
	}

	public explainHTML(): HTMLDetailsElement {
		throw new Error("Method not implemented.");
	}

	public translate(language: LocaleLang): Input {
		throw new Error("Method not implemented.");
	}

	public render(renderer: Renderer): ReturnType<Renderable["render"]> {
		return renderer.renderInput(this);
	}

}
