import { Renderer } from "./Renderer";

export interface Renderable {
	render(renderer: Renderer): SVGElement;
}
