import { HandlerFunction } from "@google-cloud/functions-framework";

const lambda: HandlerFunction = (req, res) {
	res.send("Hello world")
};

export { lambda };
