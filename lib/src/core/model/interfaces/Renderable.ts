import { Renderer } from "../../Renderer.js";

export interface Renderable {
	render(renderer: Renderer): SVGElement;
}
