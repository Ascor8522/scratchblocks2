import { Attributes } from "../../utils/Attributes.js";
import { Block } from "./Block.js";
import { Element } from "./Element.js";
import { Explainable } from "./interfaces/Explainable.js";
import { SourceInput } from "../Source.js";
import { Renderable } from "./interfaces/Renderable.js";
import { Renderer } from "../Renderer.js";
import { Translatable } from "./interfaces/Translatable.js";
import { Versions } from "../Versions.js";
import { Languages } from "../Languages.js";

export class Input extends Element<Block> implements Explainable, Translatable<Block, Input>, Renderable {
	private _type: InputTypes;
	private _value: string | Block;

	public static from(sourceCode: string, parent: Block, version: Versions): Input {
		let type;
		let value;
		throw new Error("Method not implemented.");
		return new Input({ parent, version, type, value });
	}

	public constructor({ parent, version, type, value }: Omit<Attributes<Input>, "source">) {
		super({ parent, version });
		this._type = type;
		this._value = value;
	}

	public get type(): Input["_type"] {
		return this._type;
	}

	public set type(type: Input["_type"]) {
		this._type = type;
	}

	public get value(): Input["_value"] {
		return this._value;
	}

	public set value(value: Input["_value"]) {
		this._value = value;
	}

	public getLanguage(): Languages {
		throw new Error("Method not implemented.");
	}

	public explain(indentLevel: number): string {
		return "\t".repeat(indentLevel) + "Input:" + "\n";
	}

	public explainHTML(): HTMLDetailsElement {
		throw new Error("Method not implemented.");
	}

	public translate(language: Languages, parent: Block): ReturnType<Translatable<Block, Input>["translate"]> {
		const input = new Input({ parent, version: this.version, type: this.type, value: this.value });
		return input;
	}

	public render(renderer: Renderer): ReturnType<Renderable["render"]> {
		return renderer.renderInput(this);
	}

}

export enum InputTypes {
	BOOLEAN = "boolean",
	NUMBER = "number",
	TEXT = "text",
	DROPDOWN = "dropdown",
	STACK = "stack"
}

export const inputTypes: { [key in InputTypes]: SourceInput } = {
	[InputTypes.NUMBER]: {
		type: InputTypes.NUMBER,
		symbol: "%d",
		start: "(",
		end: ")",
	},
	[InputTypes.DROPDOWN]: {
		type: InputTypes.DROPDOWN,
		symbol: "%m",
		start: "(",
		end: "v)",
	},
	[InputTypes.TEXT]: {
		type: InputTypes.TEXT,
		symbol: "%s",
		start: "[",
		end: "]",
	},
	[InputTypes.BOOLEAN]: {
		type: InputTypes.BOOLEAN,
		symbol: "%b",
		start: "<",
		end: ">",
	},
	[InputTypes.STACK]: {
		type: InputTypes.STACK,
		symbol: "%t",
		start: "{",
		end: "}",
	},
};
