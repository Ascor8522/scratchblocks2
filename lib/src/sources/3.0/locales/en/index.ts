import { SourceBlock } from "../../../../core/Source";
import { boost } from "./boost";
import { control } from "./control";
import { custom } from "./custom";
import { ev3 } from "./ev3";
import { events } from "./events";
import { gdxfor } from "./gdxfor";
import { list } from "./list";
import { looks } from "./looks";
import { makeymakey } from "./makeymakey";
import { microbit } from "./microbit";
import { motion } from "./motion";
import { music } from "./music";
import { operators } from "./operators";
import { pen } from "./pen";
import { picoboard } from "./picoboard";
import { sensing } from "./sensing";
import { sound } from "./sound";
import { translate } from "./translate";
import { tts } from "./tts";
import { variables } from "./variables";
import { video } from "./video";
import { wedo } from "./wedo";
import { wedo2 } from "./wedo2";

export const en: SourceBlock[] = [
	...motion,
	...looks,
	...sound,
	...events,
	...control,
	...sensing,
	...operators,
	...variables,
	...list,
	...custom,
	...music,
	...pen,
	...video,
	...tts,
	...translate,
	...makeymakey,
	...microbit,
	...ev3,
	...boost,
	...wedo,
	...wedo2,
	...gdxfor,
	...picoboard,
];
