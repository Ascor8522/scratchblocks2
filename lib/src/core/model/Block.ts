import { Attributes } from "../../utils/Attributes.js";
import { Element } from "./Element.js";
import { Explainable } from "./interfaces/Explainable.js";
import { Input } from "./Input.js";
import { Source } from "../Source.js";
import { Renderable } from "./interfaces/Renderable.js";
import { Renderer } from "../Renderer.js";
import { Stack } from "./Stack.js";
import { Translatable } from "./interfaces/Translatable.js";
import { Versions } from "../Versions.js";
import { Languages } from "../Languages.js";

export class Block extends Element<Stack> implements Explainable, Translatable<Stack, Block>, Renderable {
	private _originalCode: string;
	private _code: string;
	private _id?: BlockId;
	private _type: BlockType;
	private _shape: BlockShapes = BlockShapes.STACK;
	private _color?: BlockColor;
	private _inputs: Input[] = [];

	public static from(sourceCode: string, source: Source, parent: Stack, version: Versions): Block {
		let originalCode;
		let code;
		let id;
		let type; // go trough all the locales and find a block matching
		let shape;
		let color;
		let inputs;
		throw new Error("not implemented"); // TODO
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

	public set originalCode(originalCode: Block["_originalCode"]) {
		this._originalCode = originalCode;
	}

	public get code(): Block["_code"] {
		return this._code;
	}

	public set code(code: Block["_code"]) {
		this._code = code;
	}

	public get id(): Block["_id"] {
		return this._id;
	}

	public set id(id: Block["_id"]) {
		this._id = id;
	}

	public get type(): Block["_type"] {
		return this._type;
	}

	public set type(type: Block["_type"]) {
		this._type = type;
	}

	public get shape(): Block["_shape"] {
		return this._shape;
	}

	public set shape(shape: Block["_shape"]) {
		this._shape = shape;
	}

	public get color(): Block["_color"] {
		return this._color;
	}

	public set color(color: Block["_color"]) {
		this._color = color;
	}

	public get inputs(): Block["_inputs"] {
		return this._inputs;
	}

	public set inputs(inputs: Block["_inputs"]) {
		this._inputs = inputs;
	}

	public getLanguage(): Languages {
		throw new Error("Method not implemented.");
	}

	public explain(indentLevel: number): ReturnType<Explainable["explain"]> {  // TODO improve
		return "\t".repeat(indentLevel) + "Block:" + "\n"
			+ this.inputs.map((input: Input) => input.explain(indentLevel + 1));
	}

	public explainHTML(): ReturnType<Explainable["explainHTML"]> {  // TODO
		throw new Error("Method not implemented.");
	}

	public translate(language: Languages, parent: Stack): ReturnType<Translatable<Stack, Block>["translate"]> { // TODO
		if(this.id && this.source.blocks[language]) {
			const translation = new Block({
				...this,
			});
			this.source.blocks[language]!.find(b => b.id === this.id)!
		}
		const translation = new Block({ ... this, parent });
		return translation;
	}

	public render(renderer: Renderer): ReturnType<Renderable["render"]> {
		return renderer.renderBlock(this);
	}

}

export type BlockId = string;

export type BlockType = string;

export enum BlockShapes {
	STACK = "stack",
	HAT = "hat",
	RING = "ring",
	REPORTER = "reporter",
	BOOLEAN = "boolean",
	CAP = "cap",
}

export type BlockColor = string;

export const colorRegExp: RegExp = /#(?:[a-fA-F0-9]{3})(?:[a-fA-F0-9]{3}(?:[a-fA-F0-9]{2})?)?/;
