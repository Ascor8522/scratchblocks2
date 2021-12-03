export function mapScroll(...elements: HTMLElement[]): void {
	return elements.forEach(element => {
		const others = elements.filter(e => e !== element);
		element.addEventListener('wheel', (event: WheelEvent) => {
			others.forEach((other: HTMLElement) => {
				other.scrollTop = mathMap(
					(event.currentTarget! as HTMLElement).scrollTop,
					0,
					(event.currentTarget! as HTMLElement).getBoundingClientRect().height,
					0,
					element.getBoundingClientRect().height
				);
			});
		});
	});
}

function mathMap(inn: number, inMin: number, inMax: number, outMin: number, outMax: number): number {
	if(inMax === 0 || inMin === 0) {
		throw new Error(`${inMin} and ${inMax} cannot be 0`);
	}
	return (inn - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
