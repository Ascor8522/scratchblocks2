import { BlockShapes } from "../../../../core/model/Block.js";
import { inputTypes, InputTypes } from "../../../../core/model/Input.js";
import { SourceBlock } from "../../../../core/Source.js";
import { BlockTypes } from "../../Source.js";

// spell-checker: disable

export const motion: SourceBlock[] = [
	{
		"id": `motion_movesteps`,
		"string": `move ${ inputTypes[InputTypes.NUMBER].symbol } steps`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_turnright`,
		"string": `turn right ${ inputTypes[InputTypes.NUMBER].symbol } degrees`,
		"replaced": `turn @right ${ inputTypes[InputTypes.NUMBER].symbol } degrees`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_turnleft`,
		"string": `turn left ${ inputTypes[InputTypes.NUMBER].symbol } degrees`,
		"replaced": `turn @left ${ inputTypes[InputTypes.NUMBER].symbol } degrees`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_goto_menu`,
		"string": `go to ${ inputTypes[InputTypes.DROPDOWN].symbol }`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_gotoxy`,
		"string": `go to x: ${ inputTypes[InputTypes.NUMBER].symbol } y: ${ inputTypes[InputTypes.NUMBER].symbol }`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_glideto_menu`,
		"string": `glide ${ inputTypes[InputTypes.NUMBER].symbol } secs to ${ inputTypes[InputTypes.DROPDOWN].symbol }`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_glidesecstoxy`,
		"string": `glide ${ inputTypes[InputTypes.NUMBER].symbol } secs to x: ${ inputTypes[InputTypes.NUMBER].symbol } y: %d`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_pointindirection`,
		"string": `point in direction ${ inputTypes[InputTypes.NUMBER].symbol }`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_pointtowards_menu`,
		"string": `point towards ${ inputTypes[InputTypes.DROPDOWN].symbol }`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_changexby`,
		"string": `change x by ${ inputTypes[InputTypes.NUMBER].symbol }`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_setx`,
		"string": `set x to ${ inputTypes[InputTypes.NUMBER].symbol }`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_changeyby`,
		"string": `change y by ${ inputTypes[InputTypes.NUMBER].symbol }`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_sety`,
		"string": `set x to ${ inputTypes[InputTypes.NUMBER].symbol }`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_ifonedgebounce`,
		"string": `if on edge, bounce`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_setrotationstyle`,
		"string": `set totation style ${ inputTypes[InputTypes.DROPDOWN].symbol }`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `motion_xposition`,
		"string": `x position`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.REPORTER,
	},
	{
		"id": `motion_yposition`,
		"string": `y position`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.REPORTER,
	},
	{
		"id": `motion_direction`,
		"string": `direction`,
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.REPORTER,
	},
];
