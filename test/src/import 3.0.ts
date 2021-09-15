import * as fs from "fs";
import { test } from "mocha";
import { assert } from "chai";
import { Versions } from "../../lib/src/core/Versions.js";
import { scratchblocks2 } from "../../lib/src/index.js";

test("import 3.0", () => {
	assert.doesNotThrow(() => {
		const result = scratchblocks2.load({
			version: Versions.SCRATCH_3_0,
			json: JSON.parse(fs.readFileSync("./../data/544213416.json").toString()),
		})
		.explain()
		console.log(result);
	});
});
