import * as fs from "fs";
import { test } from "mocha";
import { assert } from "chai";
import { Versions } from "../../../lib/core/Versions.js";
import * as scratchblocks2 from "../../../lib/index.js";

test("import 3.0", () => {
	assert.doesNotThrow(() => {
		const result = scratchblocks2.load({
			version: Versions.SCRATCH_3_0,
			json: JSON.parse(fs.readFileSync("./../data/projects/544213416.json").toString()),
		})
		.explain()
		console.log(result);
	});
});
