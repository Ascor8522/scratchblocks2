/// <reference path="../../lib/types/index.d.ts" />

window.addEventListener("load", () => {

	const sourceTextArea: HTMLTextAreaElement = document.getElementById("source") as HTMLTextAreaElement;
	
	let timeout: number;
	sourceTextArea.addEventListener("keyup", () => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			scratchblocks2.parse(sourceTextArea.value);
		}, 500);
	});
	
});
