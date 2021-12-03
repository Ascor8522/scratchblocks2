import { ALBEvent, ALBHandler, ALBResult, Context } from "aws-lambda";

import * as scratchblocks2 from "../../lib/index.js";

// handle AWS Lambda event
// hello from lambda
export const handler: ALBHandler = async (event: ALBEvent, context: Context): Promise<ALBResult> => {
	if(event.httpMethod) {

	}

	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: "hello from lambda",
			input: event,
		}),
	};
	return response;
};

enum Action {
	EXPLAIN = "explain",
	EXPLAIN_HTML = "explain_html",
	RENDER = "render",
	TRANSLATE = "translate",
}
