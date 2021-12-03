import { Block } from "../../core/model/Block.js";
import { Document } from "../../core/model/Document.js";
import { Input } from "../../core/model/Input.js";
import { Renderable } from "../../core/model/interfaces/Renderable.js";
import { Renderer as BaseRenderer } from "../../core/Renderer.js";
import { Stack } from "../../core/model/Stack.js";

export class Renderer extends BaseRenderer {
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
