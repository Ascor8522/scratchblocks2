interface Project {
	targets: Target[];
	monitors: Monitor[];
	extensions: any[];
	meta: Meta;
}

interface Meta {
	semver: string;
	vm: string;
	agent: string;
}

interface Monitor {
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

interface Params {
	VARIABLE?: string;
}

interface Target {
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

interface Broadcasts {
	// TODO
}

interface Sound {
	assetId: string;
	name: string;
	dataFormat: string;
	rate: number;
	sampleCount: number;
	md5ext: string;
}

interface Costume {
	assetId: string;
	name: string;
	bitmapResolution: number;
	md5ext: string;
	dataFormat: string;
	rotationCenterX: number;
	rotationCenterY: number;
}

type BlockId = string;

interface Block {
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

type InputField = {
	[type: string]: number | string | (number | string)[] | (number | string)[][];
}

interface Lists {
	[id: string]: (string[] | string)[];
}

type Variables = {
	[id: string] : (number | string)[];
}
