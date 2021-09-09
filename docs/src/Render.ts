window.addEventListener("load", () => {

	const sourceTextArea: HTMLTextAreaElement = document.getElementById("source") as HTMLTextAreaElement;
	
	let timeout: number;
	sourceTextArea.addEventListener("keyup", () => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			parse(sourceTextArea.value)
		}, 500);
	});
	
	function parse(v: string) {
		const render: HTMLDivElement = document.getElementById("render") as HTMLDivElement;
	
		render.innerText = v;
	}
	
});
