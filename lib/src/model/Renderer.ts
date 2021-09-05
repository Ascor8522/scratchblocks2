import { Block } from "./Block";
import { Document } from "./Document";
import { Input } from "./Input";
import { Renderable } from "./Renderable";
import { Stack } from "./Stack";

export abstract class Renderer {

	protected constructor() {

	}

	public abstract renderDocument(document: Document): ReturnType<Renderable["render"]>;

	public abstract renderStack(stack: Stack): ReturnType<Renderable["render"]>;

	public abstract renderBlock(block: Block): ReturnType<Renderable["render"]>;

	public abstract renderInput(input: Input): ReturnType<Renderable["render"]>;

}
