import { mapScroll } from "./map_scroll.js";

window.addEventListener("load", () => {
	const renderDiv: HTMLDivElement = document.getElementById("render")! as HTMLDivElement;
	const sourceTextArea: HTMLTextAreaElement = document.getElementById("source")! as HTMLTextAreaElement;
	const exportSVGButton: HTMLButtonElement = document.getElementById("exportSVG")! as HTMLButtonElement;
	const exportPNGButton: HTMLButtonElement = document.getElementById("exportPNG")! as HTMLButtonElement;
	
	mapScroll(
		renderDiv,
		sourceTextArea,
	);

	let timeout: number;
	sourceTextArea.addEventListener("keyup", () => {
		clearTimeout(timeout);
		timeout = window.setTimeout(async () => {

			Array.from(renderDiv.children).forEach((child) => renderDiv.removeChild(child));
			renderDiv.appendChild(await scratchblocks2.render({
				code: sourceTextArea.value,
				version: scratchblocks2.Versions.SCRATCH_3_0,
			}));
		}, 500);
	});
	
	exportSVGButton.addEventListener("click", () => {
		if(renderDiv.firstChild) {
			const blob: Blob = new Blob([ renderDiv.firstElementChild!.innerHTML, ], { type: "image/svg+xml", });
		}
	});

	async function saveImage(type: "SVG" | "PNG"): Promise<void> {
		return Promise
			.resolve()
			.then(() => window.showSaveFilePicker())
			.then(handle => undefined);
	}

});
