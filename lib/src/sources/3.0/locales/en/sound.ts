import { BlockShapes } from "../../../../core/model/Block.js";
import { inputTypes, InputTypes } from "../../../../core/model/Input.js";
import { SourceBlock } from "../../../../core/Source.js";
import { BlockTypes } from "../../Source.js";

// spell-checker: disable

export const sound: SourceBlock[] = [
	{
		"id": `sound_playuntildone`,
		"string": `play sound ${ inputTypes[InputTypes.DROPDOWN].symbol } until done`,
		"category": BlockTypes.SOUND,
		"shape": BlockShapes.STACK,
	},
];
