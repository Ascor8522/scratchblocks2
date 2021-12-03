import * as scratchblocks2 from "../../lib/index.js";

exports.handler = async (event: any) => {
	const response = {
		statusCode: 200,
		body: JSON.stringify("Hello from Lambda (explain)!"),
	};
	return response;
};
