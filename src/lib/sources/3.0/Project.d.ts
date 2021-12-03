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
	comments: Comments;
	currentCostume: number;
	costumes: Costume[];
	sounds: Sound[];
	volume: number;
	layerOrder: number;
	tempo?: number;
	videoTransparency?: number;
	videoState?: string | "off";
	textToSpeechLanguage?: string | null;
	visible?: boolean;
	x?: number;
	y?: number;
	size?: number;
	direction?: number;
	draggable?: boolean;
	rotationStyle?: string;
}

export interface Broadcasts {
	[key: `broadcastMsgId-${string}`]: string;
}

export interface Comments {
	[key: `broadcastMsgId-${string}`]: string; // TODO
}

export interface Sound {
	assetId: string;
	name: string;
	dataFormat: string | "wav";
	rate: number | 48000;
	sampleCount: number;
	md5ext: string;
}

export interface Costume {
	assetId: string;
	name: string;
	bitmapResolution: number;
	md5ext: string;
	dataFormat: string | "svg";
	rotationCenterX: number;
	rotationCenterY: number;
}

export type BlockId = string;

export interface Block {
	opcode: string;
	next?: string | null;
	parent?: BlockId;
	inputs: InputField;
	fields: InputField;
	shadow: boolean;
	topLevel: boolean;
	x?: number;
	y?: number;
}

export type InputField = {
	[type: string]: [string] | [string, null] | number | string | (number | string)[] | (number | string)[][];
}

export interface Lists {
	[id: string]: [string, (string | number)[]];
}

export type Variables = {
	[id: string] : [string, string | number] | [string, string | number, true];
}
