import { Attributes } from "../utils/Attributes";
import { Block } from "./Block";
import { Document } from "./Document";
import { Element } from "./Element";
import { Explainable } from "./Explainable";
import { LocaleLang } from "./Locale";
import { Renderable } from "./Renderable";
import { Renderer } from "./Renderer";
import { Translatable } from "./Translatable";
import { Versions } from "./Versions";

export class Stack extends Element<Document> implements Explainable, Translatable, Renderable {

	private _blocks: Block[];

	public static from(sourceCode: string, parent: Document, version: Versions): Stack {
		let blocks;
		throw new Error("Not implemented.");
		new Stack({ parent, version, blocks });
	}

	private constructor({ parent, version, blocks }: Attributes<Stack>) {
		super({ parent, version });
		this._blocks = blocks;
	}

	public get blocks(): Stack["_blocks"] {
		return this._blocks;
	}

	public explain(indentLevel: number): string {
		return "\t".repeat(indentLevel) + "Stack:" + "\n" + this._blocks.map(block => block.explain(indentLevel + 1));
	}

	public explainHTML(): HTMLDetailsElement {
		throw new Error("Method not implemented.");
	}

	public translate(language: LocaleLang): Stack {
		return new Stack({ parent: this.parent, version: this.version, blocks: this._blocks.map(block => block.translate(language)) });
	}

	public render(renderer: Renderer): ReturnType<Renderable["render"]> {
		return renderer.renderStack(this);
	}

}
