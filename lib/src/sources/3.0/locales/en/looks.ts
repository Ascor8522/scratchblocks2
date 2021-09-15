import { BlockShapes } from "../../../../core/model/Block.js";
import { inputTypes, InputTypes } from "../../../../core/model/Input.js";
import { SourceBlock } from "../../../../core/Source.js";
import { BlockTypes } from "../../Source.js";

// spell-checker: disable

export const looks: SourceBlock[] = [
	{
		"id": `looks_sayforsecs`,
		"string": `say ${ inputTypes[InputTypes.TEXT].symbol } for ${ inputTypes[InputTypes.NUMBER].symbol } seconds`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_say`,
		"string": `say ${ inputTypes[InputTypes.TEXT].symbol }`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_thinkforsecs`,
		"string": `think ${ inputTypes[InputTypes.TEXT].symbol } for ${ inputTypes[InputTypes.NUMBER].symbol } seconds`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_think`,
		"string": `think ${ inputTypes[InputTypes.TEXT].symbol }`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_switchcostumeto`,
		"string": `switch costume to ${ inputTypes[InputTypes.DROPDOWN].symbol }`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_nextcostume`,
		"string": `next costume`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_switchbackdropto`,
		"string": `switch backdrop to ${ inputTypes[InputTypes.DROPDOWN].symbol }`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_nextbackdrop`,
		"string": `next backdrop`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_changesizeby`,
		"string": `change size by ${ inputTypes[InputTypes.NUMBER].symbol }`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_setsizeto`,
		"string": `set size to ${ inputTypes[InputTypes.NUMBER].symbol } %`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_changeeffectby`,
		"string": `change ${ inputTypes[InputTypes.DROPDOWN].symbol } effect by ${ inputTypes[InputTypes.NUMBER].symbol }`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_seteffectto`,
		"string": `set ${ inputTypes[InputTypes.DROPDOWN].symbol } effect to ${ inputTypes[InputTypes.NUMBER].symbol }`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_cleargraphiceffects`,
		"string": `clear graphic effects`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_show`,
		"string": `show`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_hide`,
		"string": `hide`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_gotofrontback`,
		"string": `go to ${ inputTypes[InputTypes.DROPDOWN].symbol } layer`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_goforwardbackwardlayers`,
		"string": `go ${ inputTypes[InputTypes.DROPDOWN].symbol } ${ inputTypes[InputTypes.NUMBER].symbol } layers`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.STACK,
	},
	{
		"id": `looks_costumenumbername`,
		"string": `costume ${ inputTypes[InputTypes.DROPDOWN].symbol }`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.REPORTER,
	},
	{
		"id": `looks_backdropnumbername`,
		"string": `backdrop ${ inputTypes[InputTypes.DROPDOWN].symbol }`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.REPORTER,
	},
	{
		"id": `looks_size`,
		"string": `size`,
		"category": BlockTypes.LOOKS,
		"shape": BlockShapes.REPORTER,
	},
];
