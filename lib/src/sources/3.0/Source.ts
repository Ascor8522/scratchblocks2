import { Languages } from "../../core/Languages.js";
import { InputTypes } from "../../core/model/Input.js";
import { Source as BaseSource } from "../../core/Source.js";
import { Loader } from "./Loader.js";
import { en } from "./locales/en/index.js";
import { Renderer } from "./Renderer.js";

export class Source extends BaseSource {
	protected readonly _name = "3.0";
	protected readonly _renderer = new Renderer();
	protected readonly _loader = new Loader();
	protected readonly _colors = {
		[BlockTypes.MOTION]: "#4B9AFB",
		[BlockTypes.LOOKS]: "#9A6CF9",
		[BlockTypes.SOUND]: "#D067CB",
		[BlockTypes.EVENTS]: "#FFBE30",
		[BlockTypes.CONTROL]: "#FFAA32",
		[BlockTypes.SENSING]: "#5BB2D4",
		[BlockTypes.OPERATORS]: "#57BF63",
		[BlockTypes.VARIABLES]: "#FF8B2C",
		[BlockTypes.LIST]: "#FF6624",
		[BlockTypes.CUSTOM]: "#FF687F",
		[BlockTypes.CUSTOM_ARG]: "#FF687F",
		[BlockTypes.EXTENSION]: "#00BC8F",
		[BlockTypes.GREY]: "#BFBFBF",
		[BlockTypes.UNDEFINED]: "#EE4442",
		[BlockTypes.OBSOLETE]: "#EE4442",
		[BlockTypes.MUSIC]: "#00BC8F",
		[BlockTypes.PEN]: "#00BC8F",
		[BlockTypes.VIDEO]: "#00BC8F",
		[BlockTypes.TTS]: "#00BC8F",
		[BlockTypes.TRANSLATE]: "#00BC8F",
		[BlockTypes.MAKEYMAKEY]: "#00BC8F",
		[BlockTypes.MICROBIT]: "#00BC8F",
		[BlockTypes.EV3]: "#00BC8F",
		[BlockTypes.BOOST]: "#00BC8F",
		[BlockTypes.WEDO]: "#00BC8F",
		[BlockTypes.WEDO2]: "#00BC8F",
		[BlockTypes.GDXFOR]: "#00BC8F",
		[BlockTypes.PICOBOARD]: "#00BC8F",
	};
	protected readonly _blocks = {
		[Languages.ENGLISH]: en,
	};
	protected readonly _icons = {
		"@right": "right.svg",
		"@left": "left.svg",
	};
}

export enum BlockTypes {
	MOTION = "motion",
	LOOKS = "looks",
	SOUND = "sound",
	EVENTS = "events",
	CONTROL = "control",
	SENSING = "sensing",
	OPERATORS = "operators",
	VARIABLES = "variables",
	LIST = "list",
	CUSTOM = "custom",
	CUSTOM_ARG = "custom-arg",
	EXTENSION = "extension",
	GREY = "grey",
	UNDEFINED = "undefined",
	OBSOLETE = "obsolete",
	MUSIC = "music",
	PEN = "pen",
	VIDEO = "video",
	TTS = "tts",
	TRANSLATE = "translate",
	MAKEYMAKEY = "makeymakey",
	MICROBIT = "microbit",
	EV3 = "ev3",
	BOOST = "boost",
	WEDO = "wedo",
	WEDO2 = "wedo2",
	GDXFOR = "gdxfor",
	PICOBOARD = "picoboard",
}
