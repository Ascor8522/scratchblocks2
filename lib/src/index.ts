import { Loader } from "./core/Loader.js";
import { Languages } from "./core/Languages.js";
import { Parser } from "./core/Parser.js";
import { Renderer } from "./core/Renderer.js";
import { Versions, defaultVersion, sources } from "./core/Versions.js";

type parameters = { // TODO rename
	version: Versions,
	code: string,
}

export namespace scratchblocks2 {

	export function parse({version, code}: parameters): ReturnType<typeof Parser["parse"]> {
		return Parser.parse(code);
	}

	export function load({version, json}: {version: Versions, json: unknown}): ReturnType<Loader["load"]> {
		return sources[version].loader.load(json);
	}

	export function explain({version, code}: parameters): ReturnType<ReturnType<typeof Parser["parse"]>["explain"]> {
		return parse({version, code}).explain();
	}

	export function explainHTML({version, code}: parameters): ReturnType<ReturnType<typeof Parser["parse"]>["explainHTML"]> {
		return parse({version, code}).explainHTML();
	}

	export async function render({version, code}: parameters): Promise<ReturnType<ReturnType<typeof Parser["parse"]>["render"]>> {
		return parse({version, code}).render(await getRenderer(version));
	}

	export function translate({version, code, language}: parameters & { language: Languages }): ReturnType<ReturnType<typeof Parser["parse"]>["translate"]> {
		return parse({version, code}).translate(language);
	}

	export function replaceExplain({version, code, selectors}: parameters & { selectors: string[] }): void {
		return getElements(...selectors)
			.forEach(element => {
				const explanation = document.createElement("samp");
				explanation.innerHTML = parse({version, code}).explain();
				element.parentElement?.insertBefore(explanation, element!.nextElementSibling);
			});
	}

	export function replaceExplainHTML({version, code, selectors}: parameters & { selectors: string[] }): void {
		return getElements(...selectors)
			.forEach(element => element.parentElement
				?.insertBefore(
					parse({version, code}).explainHTML(),
					element!.nextElementSibling));
	}

	export async function replaceRender({version, selectors}: { version: Versions, selectors: string[] }): Promise<void> {
		const renderer = await getRenderer(version);
		return getElements(...selectors)
			.forEach(async element => element.parentElement
				?.insertBefore(
					parse({version, code: element.textContent || ""}).render(renderer),
					element!.nextElementSibling));
	}

	export async function replaceTranslate({version, language, selectors}: { version: Versions, language: Languages, selectors: string[] }): Promise<void> {
		const renderer = await getRenderer(version);
		return getElements(...selectors)
			.forEach(element => element.parentElement
				?.insertBefore(
					parse({version, code: element.textContent || ""}).translate(language).render(renderer),
					element!.nextElementSibling));
	}

	async function getRenderer(version: Versions): Promise<Renderer> {
		return (await import(`./sources/${version}/Renderer`)).Renderer as Renderer;
	}

	function getElements(...selectors: string[]): Element[] {
		const defaultSelector = ["pre.blocks", "pre.scratchblocks", "code.b"];
		return (selectors || defaultSelector)
			.map(selector => document.querySelector(selector))
			.filter((element): element is Element => !!element);
	}

}
