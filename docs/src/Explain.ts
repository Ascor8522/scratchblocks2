window.addEventListener("load", () => {

	const sourceTextArea: HTMLTextAreaElement = document.getElementById("source") as HTMLTextAreaElement;
	
	let timeout: number;
	sourceTextArea.addEventListener("keyup", () => {
		window.clearTimeout(timeout);
		timeout = window.setTimeout(() => {
			scratchblocks2.parse(sourceTextArea.value);
		}, 500);
	});
	
});
