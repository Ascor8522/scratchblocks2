/// <reference path="../../lib/src/index.ts" />

window.addEventListener("load", () => {

	const renderDiv: HTMLDivElement = document.getElementById("render") as HTMLDivElement;
	const sourceTextArea: HTMLTextAreaElement = document.getElementById("source") as HTMLTextAreaElement;
	const exportSVGButton: HTMLButtonElement = document.getElementById("exportSVG") as HTMLButtonElement;
	const exportPNGButton: HTMLButtonElement = document.getElementById("exportPNG") as HTMLButtonElement;
	
	let timeout: number;
	sourceTextArea.addEventListener("keyup", () => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			scratchblocks2.render(renderDiv, sourceTextArea.value);
		}, 500);
	});
	
	exportSVGButton.addEventListener("click", () => {
		if(renderDiv.firstChild) {
			const blob: Blob = new Blob(renderDiv.firstElementChild!.innerHTML, {type: "image/svg+xml"});
		}
	}

	async function saveImage(type: "SVG" | "PNG") {
		const handle = await window.showSaveFilePicker();
	}
	
});
