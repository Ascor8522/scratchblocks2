import { Attributes } from "../../utils/Attributes";
import { Element } from "./Element";
import { Explainable } from "./interfaces/Explainable";
import { LocaleLang } from "../Source";
import { Renderable } from "./interfaces/Renderable";
import { Renderer } from "../Renderer";
import { Stack } from "./Stack";
import { Translatable } from "./interfaces/Translatable";
import { Versions } from "../Versions";

export class Document extends Element<null> implements Explainable, Translatable, Renderable {
	private _stacks: Stack[] = [];

	public static from(sourceCode: string, parent: null, version: Versions): Document {
		let stacks;
		throw new Error("Not implemented");
		return new Document({ parent, version, stacks });
	}

	private constructor({ parent, version, stacks }: Attributes<Document>) {
		super({ parent, version });
		this._stacks = stacks;
	}

	public get stacks(): Document["_stacks"] {
		return this._stacks;
	}

	public explain(indentLevel: number = 0): string {
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

	public translate(language: LocaleLang): Document {
		return new Document({ parent: this.parent, version: this.version, stacks: this.stacks.map(stack => stack.translate(language)) });
	}

	public render(renderer: Renderer): ReturnType<Renderable["render"]> {
		return renderer.renderDocument(this);
	}

}
