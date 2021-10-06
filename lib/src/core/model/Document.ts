import { Attributes } from "../../utils/Attributes.js";
import { Element } from "./Element.js";
import { Explainable } from "./interfaces/Explainable.js";
import { Renderable } from "./interfaces/Renderable.js";
import { Renderer } from "../Renderer.js";
import { Stack } from "./Stack.js";
import { Translatable } from "./interfaces/Translatable.js";
import { Versions } from "../Versions.js";
import { Languages } from "../Languages.js";

export class Document extends Element<null> implements Explainable, Translatable<null, Document>, Renderable {
	private _stacks: Stack[] = [];
	private _lists: string[] = [];
	private _variables: string[] = [];
	private _customBlocks: string[] = [];

	public static from(sourceCode: string, parent: null, version: Versions): Document {
		let stacks;
		throw new Error("Not implemented"); // TODO
		return new Document({ parent, version, stacks });
	}

	public constructor({ parent, version, stacks }: Attributes<Document>) {
		super({ parent, version });
		this._stacks = stacks;
	}

	public get stacks(): Document["_stacks"] {
		return this._stacks;
	}

	public set stacks(value: Document["_stacks"]) {
		this._stacks = value;
	}

	public getLanguage(): Languages {
		const results = this.stacks
			.map((stack: Stack) => stack.getLanguage())
			.reduce((p, c: Languages) => (void ++p[c]) || p,
				Object.fromEntries(Object.keys(Languages).map((key) => [key, 0])));
		const max = Math.max(...Object.values(results));
		return Object.entries(results)
			.find(([key, value]) => value === max)![0] as Languages;
	}

	public explain(indentLevel: number = 0): string { // TODO improve
		return "\t".repeat(indentLevel) + "Document:" + "\n" + this.stacks.map(stack => stack.explain(indentLevel + 1));
	}

	public explainHTML(): HTMLDetailsElement {
		const details = document.createElement("details");
		const summary = document.createElement("summary");
		details.appendChild(summary);
		summary.innerText = "Document";
		const table = document.createElement("table");
		details.appendChild(table);
		const tableHeader = document.createElement("th");
		table.appendChild(tableHeader);
		const propHeaderCell = document.createElement("td");
		tableHeader.appendChild(propHeaderCell);
		propHeaderCell.innerText = "Properties";
		const valueHeaderCell = document.createElement("td");
		tableHeader.appendChild(valueHeaderCell);
		Object.entries(this).forEach(([property, value]) => {
			const row = document.createElement("tr");
			table.appendChild(row);
			const propCell = document.createElement("td");
			row.appendChild(propCell);
			propCell.innerText = property;
			const valueCell = document.createElement("td");
			row.appendChild(valueCell);
			if(value instanceof Array) {
				(value as Explainable[]).map(v => v.explainHTML()).map(v => valueCell.appendChild(v));
			} else {
				valueCell.appendChild((value as Explainable).explainHTML());
			}
		});
		return details;
	}

	public translate(language: Languages, parent: null = null): ReturnType<Translatable<null, Document>["translate"]> {
		const doc = new Document({ ...this, parent });
		doc.stacks = this.stacks.map(stack => stack.translate(language, doc));
		return doc;
	}

	public render(renderer: Renderer): ReturnType<Renderable["render"]> {
		return renderer.renderDocument(this);
	}

}
