import { SourceBlock } from "../../../../core/Source.js";
import { boost } from "./boost.js";
import { control } from "./control.js";
import { custom } from "./custom.js";
import { ev3 } from "./ev3.js";
import { events } from "./events.js";
import { gdxfor } from "./gdxfor.js";
import { list } from "./list.js";
import { looks } from "./looks.js";
import { makeymakey } from "./makeymakey.js";
import { microbit } from "./microbit.js";
import { motion } from "./motion.js";
import { music } from "./music.js";
import { operators } from "./operators.js";
import { pen } from "./pen.js";
import { picoboard } from "./picoboard.js";
import { sensing } from "./sensing.js";
import { sound } from "./sound.js";
import { translate } from "./translate.js";
import { tts } from "./tts.js";
import { variables } from "./variables.js";
import { video } from "./video.js";
import { wedo } from "./wedo.js";
import { wedo2 } from "./wedo2.js";

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
