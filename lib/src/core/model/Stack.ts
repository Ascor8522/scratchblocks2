import { Attributes } from "../../utils/Attributes.js";
import { Block } from "./Block.js";
import { Document } from "./Document.js";
import { Element } from "./Element.js";
import { Explainable } from "./interfaces/Explainable.js";
import { Renderable } from "./interfaces/Renderable.js";
import { Renderer } from "../Renderer.js";
import { Translatable } from "./interfaces/Translatable.js";
import { Versions } from "../Versions.js";
import { Languages } from "../Languages.js";

export class Stack extends Element<Document> implements Explainable, Translatable<Document, Stack>, Renderable {
	private _blocks: Block[];

	public static from(sourceCode: string, parent: Document, version: Versions): Stack {
		let blocks;
		throw new Error("Not implemented.");
		new Stack({ parent, version, blocks });
	}

	public constructor({ parent, version, blocks }: Attributes<Stack>) {
		super({ parent, version });
		this._blocks = blocks;
	}

	public get blocks(): Stack["_blocks"] {
		return this._blocks;
	}

	public set blocks(blocks: Stack["_blocks"]) {
		this._blocks = blocks;
	}

	public getLanguage(): Languages {
		throw new Error("Method not implemented.");
	}

	public explain(indentLevel: number): string {
		return "\t".repeat(indentLevel) + "Stack:" + "\n" + this._blocks.map(block => block.explain(indentLevel + 1));
	}

	public explainHTML(): HTMLDetailsElement {
		throw new Error("Method not implemented.");
	}

	public translate(language: Languages, parent: Document): ReturnType<Translatable<Document, Stack>["translate"]> {
		const stack = new Stack({
			parent: this.parent,
			version: this.version,
			blocks: [],
		});
		stack.blocks = this.blocks.map(block => block.translate(language, stack));
		return stack;
	}

	public render(renderer: Renderer): ReturnType<Renderable["render"]> {
		return renderer.renderStack(this);
	}

}
