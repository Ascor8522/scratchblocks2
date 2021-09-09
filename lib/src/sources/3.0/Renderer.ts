import { Block } from "../../core/model/Block";
import { Document } from "../../core/model/Document";
import { Input } from "../../core/model/Input";
import { Renderable } from "../../core/model/interfaces/Renderable";
import { Renderer as BaseRenderer } from "../../core/Renderer";
import { Stack } from "../../core/model/Stack";

export class Renderer extends BaseRenderer {

	public constructor() {
		super();
	}

	public renderDocument(document: Document): ReturnType<Renderable["render"]> {
		throw new Error("Method not implemented.");
	}

	public renderStack(stack: Stack): ReturnType<Renderable["render"]> {
		throw new Error("Method not implemented.");
	}

	public renderBlock(block: Block): ReturnType<Renderable["render"]> {
		throw new Error("Method not implemented.");
	}

	public renderInput(input: Input): ReturnType<Renderable["render"]> {
		throw new Error("Method not implemented.");
	}

}
