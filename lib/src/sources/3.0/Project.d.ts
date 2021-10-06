export interface Project {
	targets: Target[];
	monitors: Monitor[];
	extensions: any[];
	meta: Meta;
}

export interface Meta {
	semver: string;
	vm: string;
	agent: string;
}

export interface Monitor {
	id: string;
	mode: string;
	opcode: string;
	params: Params;
	spriteName?: Target["name"];
	value: number | string;
	width: number;
	height: number;
	x: number;
	y: number;
	visible: boolean;
	sliderMin: number;
	sliderMax: number;
	isDiscrete: boolean;
}

export interface Params {
	VARIABLE?: string;
}

export interface Target {
	isStage: boolean;
	name: string;
	variables: Variables;
	lists: Lists;
	broadcasts: Broadcasts;
	blocks: Record<BlockId, Block>;
	comments: Broadcasts;
	currentCostume: number;
	costumes: Costume[];
	sounds: Sound[];
	volume: number;
	layerOrder: number;
	tempo?: number;
	videoTransparency?: number;
	videoState?: string;
	textToSpeechLanguage?: string;
	visible?: boolean;
	x?: number;
	y?: number;
	size?: number;
	direction?: number;
	draggable?: boolean;
	rotationStyle?: string;
}

export interface Broadcasts {
	// TODO
}

export interface Sound {
	assetId: string;
	name: string;
	dataFormat: string;
	rate: number;
	sampleCount: number;
	md5ext: string;
}

export interface Costume {
	assetId: string;
	name: string;
	bitmapResolution: number;
	md5ext: string;
	dataFormat: string;
	rotationCenterX: number;
	rotationCenterY: number;
}

export type BlockId = string;

export interface Block {
	fields: InputField;
	inputs: InputField;
	next?: string;
	opcode: string;
	parent?: BlockId;
	shadow: boolean;
	topLevel: boolean;
	x?: number;
	y?: number;
}

export type InputField = {
	[type: string]: number | string | (number | string)[] | (number | string)[][];
}

export interface Lists {
	[id: string]: (string[] | string)[];
}

export type Variables = {
	[id: string] : (number | string)[];
}
