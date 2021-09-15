import { Loader } from "./Loader.js";
import { Languages } from "./Languages.js";
import { BlockColor, BlockId, BlockShapes, BlockType } from "./model/Block.js";
import { InputTypes } from "./model/Input.js";
import { Renderer } from "./Renderer.js";

export abstract class Source {
	protected abstract readonly _name: string;
	protected abstract readonly _renderer: Renderer;
	protected abstract readonly _loader: Loader;
	protected abstract readonly _colors: Record<BlockType, BlockColor>;
	protected abstract readonly _blocks: Partial<Record<Languages, SourceBlock[]>> & Record<Languages.ENGLISH, SourceBlock[]>;
	protected abstract readonly _icons: Record<SourceIconId, SourceIconPath>;

	public get name(): Source["_name"] {
		return this._name;
	}

	public get renderer(): Source["_renderer"] {
		return this._renderer;
	}

	public get loader(): Source["_loader"] {
		
		return this._loader;
	}

	public get colors(): Source["_colors"] {
		return this._colors;
	}

	public get blocks(): Source["_blocks"] {
		return this._blocks;
	}

	public get icons(): Source["_icons"] {
		return this._icons;
	}
}

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
