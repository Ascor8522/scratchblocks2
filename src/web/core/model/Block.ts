import { Block } from "../../../lib/core/model/Block";

declare module "../../../lib/core/model/Block" {
	interface Block {
		renderHTML(): HTMLElement;
	}
}

Block.prototype.renderHTML = function(): HTMLElement {
	return document.createElement("div");
}
