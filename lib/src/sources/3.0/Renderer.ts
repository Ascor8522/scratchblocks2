import { Block } from "../../model/Block";
import { Document } from "../../model/Document";
import { Input } from "../../model/Input";
import { Renderable } from "../../model/Renderable";
import { Renderer as BaseRenderer } from "../../model/Renderer";
import { Stack } from "../../model/Stack";

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
