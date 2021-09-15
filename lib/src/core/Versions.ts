// import { Source as Source_1_0 } from "../sources/1.0/Source.js";
// import { Source as Source_1_1 } from "../sources/1.1/Source.js";
// import { Source as Source_1_2 } from "../sources/1.2/Source.js";
// import { Source as Source_1_3 } from "../sources/1.3/Source.js";
// import { Source as Source_1_4 } from "../sources/1.4/Source.js";
// import { Source as Source_2_0 } from "../sources/2.0/Source.js";
import { Source as Source_3_0 } from "../sources/3.0/Source.js";
import { Source } from "./Source.js";

export enum Versions {
	// SCRATCH_1_0 = "1.0",
	// SCRATCH_1_1 = "1.1",
	// SCRATCH_1_2 = "1.2",
	// SCRATCH_1_3 = "1.3",
	// SCRATCH_1_4 = "1.4",
	// SCRATCH_2_0 = "2.0",
	SCRATCH_3_0 = "3.0",
}

export const sources: Record<Versions, Source> = {
	// [Versions.SCRATCH_1_0]: new Source_1_0(),
	// [Versions.SCRATCH_1_1]: new Source_1_1(),
	// [Versions.SCRATCH_1_2]: new Source_1_2(),
	// [Versions.SCRATCH_1_3]: new Source_1_3(),
	// [Versions.SCRATCH_1_4]: new Source_1_4(),
	// [Versions.SCRATCH_2_0]: new Source_2_0(),
	[Versions.SCRATCH_3_0]: new Source_3_0(),
}

export const defaultVersion: Versions = Versions.SCRATCH_3_0;
