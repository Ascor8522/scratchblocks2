import { BlockShapes } from "../../../../core/model/Block.js";
import { InputTypes } from "../../../../core/model/Input.js";
import { SourceBlock } from "../../../../core/Source.js";
import { BlockTypes } from "../../Source.js";

// spell-checker: disable

export const motion: SourceBlock[] = [
	{
		id: ``,
		scratchId: `motion_movesteps`,
		string: `move $steps steps`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$steps",
				type: InputTypes.NUMBER,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_turnright`,
		string: `turn right $degrees degrees`,
		replaced: `turn @right $degrees degrees`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$degrees",
				type: InputTypes.NUMBER,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_turnleft`,
		string: `turn left $degrees degrees`,
		replaced: `turn @left $degrees degrees`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$degrees",
				type: InputTypes.NUMBER,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_goto_menu`,
		string: `go to $to`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$to",
				type: InputTypes.DROPDOWN,
			}
		],
	},
	{
		id: ``,
		scratchId: `motion_gotoxy`,
		string: `go to x: $x y: $y`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$x",
				type: InputTypes.NUMBER,
			},
			{
				id: "$y",
				type: InputTypes.NUMBER,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_glideto_menu`,
		string: `glide $secs secs to $to`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$secs",
				type: InputTypes.NUMBER,
			},
			{
				id: "$to",
				type: InputTypes.DROPDOWN,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_glidesecstoxy`,
		string: `glide $secs secs to x: $x y: $y`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$secs",
				type: InputTypes.NUMBER,
			},
			{
				id: "$x",
				type: InputTypes.NUMBER,
			},
			{
				id: "$y",
				type: InputTypes.NUMBER,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_pointindirection`,
		string: `point in direction $direction`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$direction",
				type: InputTypes.NUMBER,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_pointtowards_menu`,
		string: `point towards $towards`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$towards",
				type: InputTypes.DROPDOWN,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_changexby`,
		string: `change x by $dx`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$dx",
				type: InputTypes.NUMBER,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_setx`,
		string: `set x to $x`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$x",
				type: InputTypes.NUMBER,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_changeyby`,
		string: `change y by $dy`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$dy",
				type: InputTypes.NUMBER,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_sety`,
		string: `set y to $y`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$y",
				type: InputTypes.NUMBER,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_ifonedgebounce`,
		string: `if on edge, bounce`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
	},
	{
		id: ``,
		scratchId: `motion_setrotationstyle`,
		string: `set totation style $style`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.STACK,
		inputs: [
			{
				id: "$style",
				type: InputTypes.DROPDOWN,
			},
		],
	},
	{
		id: ``,
		scratchId: `motion_xposition`,
		string: `x position`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.REPORTER,
	},
	{
		id: ``,
		scratchId: `motion_yposition`,
		string: `y position`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.REPORTER,
	},
	{
		id: ``,
		scratchId: `motion_direction`,
		string: `direction`,
		category: BlockTypes.MOTION,
		shape: BlockShapes.REPORTER,
	},
];
