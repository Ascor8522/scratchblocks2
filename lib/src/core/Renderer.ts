import { Block } from "./model/Block.js";
import { Document } from "./model/Document.js";
import { Input } from "./model/Input.js";
import { Renderable } from "./model/interfaces/Renderable.js";
import { Stack } from "./model/Stack.js";

export abstract class Renderer {
	public abstract renderDocument(document: Document, mode?: RenderModes): ReturnType<Renderable["render"]>;
	public abstract renderStack(stack: Stack, mode?: RenderModes): ReturnType<Renderable["render"]>;
	public abstract renderBlock(block: Block, mode?: RenderModes): ReturnType<Renderable["render"]>;
	public abstract renderInput(input: Input, mode?: RenderModes): ReturnType<Renderable["render"]>;
}

export enum RenderModes {
	CSS = "css",
	INLINE = "inline",
}
