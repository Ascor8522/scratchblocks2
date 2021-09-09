import { BlockShapes } from "../../../../core/model/Block";
import { SourceBlock } from "../../../../core/Source";
import { BlockTypes } from "../../Source";

export const motion: SourceBlock[] = [
	{
		"id": "motion_movesteps",
		"string": "move %d steps",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_turnright",
		"string": "turn right %d degrees",
		"replaced": "turn @right %d degrees",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_turnleft",
		"string": "turn left %d degrees",
		"replaced": "turn @left %d degrees",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_goto_menu",
		"string": "go to %m",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_gotoxy",
		"string": "go to x: %d y: %d",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_glideto_menu",
		"string": "glide %d secs to %m",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_glidesecstoxy",
		"string": "glide %d secs to x: %d y: %d",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_pointindirection",
		"string": "point in direction %d",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_pointtowards_menu",
		"string": "point towards %m",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_changexby",
		"string": "change x by %d",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_setx",
		"string": "set x to %d",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_changeyby",
		"string": "change y by %d",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_sety",
		"string": "set x to %d",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_ifonedgebounce",
		"string": "if on edge, bounce",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_setrotationstyle",
		"string": "set totation style %m",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.STACK,
	},
	{
		"id": "motion_xposition",
		"string": "x position",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.REPORTER,
	},
	{
		"id": "motion_yposition",
		"string": "y position",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.REPORTER,
	},
	{
		"id": "motion_direction",
		"string": "direction",
		"category": BlockTypes.MOTION,
		"shape": BlockShapes.REPORTER,
	},
];
