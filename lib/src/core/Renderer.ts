import { Block } from "./model/Block";
import { Document } from "./model/Document";
import { Input } from "./model/Input";
import { Renderable } from "./model/interfaces/Renderable";
import { Stack } from "./model/Stack";

export abstract class Renderer {

	protected constructor() {

	}

	public abstract renderDocument(document: Document): ReturnType<Renderable["render"]>;

	public abstract renderStack(stack: Stack): ReturnType<Renderable["render"]>;

	public abstract renderBlock(block: Block): ReturnType<Renderable["render"]>;

	public abstract renderInput(input: Input): ReturnType<Renderable["render"]>;

}
