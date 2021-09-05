import { Attributes } from "../utils/Attributes";
import { Element } from "./Element";
import { Explainable } from "./Explainable";
import { Input } from "./Input";
import { LocaleLang } from "./Locale";
import { Renderable } from "./Renderable";
import { Renderer } from "./Renderer";
import { Source } from "./Source";
import { Stack } from "./Stack";
import { Translatable } from "./Translatable";
import { Versions } from "./Versions";

export type BlockId = string;

export type Color = string;

export const colorRegExp: RegExp = /#(?:[a-fA-F0-9]{3})(?:[a-fA-F0-9]{3}(?:[a-fA-F0-9]{2})?)?/;

export const enum BlockShapes {
	STACK = "stack",
	HAT = "hat",
	RING = "ring",
	REPORTER = "reporter",
	BOOLEAN = "boolean",
	CAP = "cap",
}

export const enum BlockTypes {
	MOTION = "motion",
	LOOKS = "looks",
	SOUND = "sound",
	EVENTS = "events",
	CONTROL = "control",
	SENSING = "sensing",
	OPERATORS = "operators",
	VARIABLES = "variables",
	LIST = "list",
	CUSTOM = "custom",
	CUSTOM_ARG = "custom-arg",
	EXTENSION = "extension",
	GREY = "grey",
	UNDEFINED = "undefined",
	OBSOLETE = "obsolete",
	MUSIC = "music",
	PEN = "pen",
	VIDEO = "video",
	TTS = "tts",
	TRANSLATE = "translate",
	MAKEYMAKEY = "makeymakey",
	MICROBIT = "microbit",
	EV3 = "ev3",
	BOOST = "boost",
	WEDO = "wedo",
	WEDO2 = "wedo2",
	GDXFOR = "gdxfor",
	PICOBOARD = "picoboard",
}


export class Block extends Element<Stack> implements Explainable, Translatable, Renderable {
	private _originalCode: string;
	private _code: string;
	private _id?: BlockId;
	private _type: BlockTypes | string = BlockTypes.UNDEFINED;
	private _shape: BlockShapes = BlockShapes.STACK;
	private _color?: Color;
	private _inputs: Input[] = [];

	public static from(sourceCode: string, source: Source, parent: Stack, version: Versions): Block {
		let originalCode;
		let code;
		let id;
		let type; // go trough all the locales and find a block matching
		let shape;
		let color;
		let inputs;
		throw new Error("not implemented");
		return new Block({ parent, version, originalCode, code, id, type, shape, color, inputs });
	}

	private constructor({ parent, version, originalCode, code, id, type, shape, color, inputs }: Attributes<Block>) {
		super({ parent, version });
		this._originalCode = originalCode;
		this._code = code;
		this._id = id;
		this._type = type;
		this._shape = shape;
		this._color = color;
		this._inputs = inputs;
	}

	public get originalCode(): Block["_originalCode"] {
		return this._originalCode;
	}

	public get code(): Block["_code"] {
		return this._code;
	}

	public get id(): Block["_id"] {
		return this._id;
	}

	public get type(): Block["_type"] {
		return this._type;
	}

	public get shape(): Block["_shape"] {
		return this._shape;
	}

	public get color(): Block["_color"] {
		return this._color;
	}

	public get inputs(): Block["_inputs"] {
		return this._inputs;
	}

	public explain(indentLevel: number): ReturnType<Explainable["explain"]> {
		return "\t".repeat(indentLevel) + "Block:" + "\n"
			+ this.inputs.map(input => input.explain(indentLevel + 1));
	}

	public explainHTML(): ReturnType<Explainable["explainHTML"]> {
		throw new Error("Method not implemented.");
	}

	public translate(language: LocaleLang): Block {
		throw new Error("Method not implemented.");
	}

	public render(renderer: Renderer): ReturnType<Renderable["render"]> {
		return renderer.renderBlock(this);
	}

}
