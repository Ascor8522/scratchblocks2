import { BlockColor, BlockId, BlockShapes, BlockType } from "./model/Block";
import { InputTypes } from "./model/Input";
import { Renderer } from "./Renderer";

export abstract class Source {
	protected abstract readonly _name: string;
	protected abstract readonly _renderer: Renderer;
	protected abstract readonly _colors: Record<BlockType, BlockColor>;
	protected abstract readonly _blocks: Record<LocaleLang, SourceBlock[]> & Record<"en", SourceBlock[]>;
	protected abstract readonly _icons: Record<SourceIconId, SourceIconPath>;
}

export type LocaleLang = string;

export interface SourceBlock {
	id: BlockId;
	string: string;
	replaced?: string;
	category: BlockType;
	shape: BlockShapes;
}

export type SourceIconId = string;

export type SourceIconPath = string;

export interface SourceInput {
	type: InputTypes;
	symbol: string;
	start: string;
	end: string;
}
