import { LocaleLang } from "./core/Source";
import { Parser } from "./core/Parser";
import { Renderer } from "./core/Renderer";
import { Versions, defaultVersion } from "./core/Versions";

export namespace scratchblocks2 {

	export function parse(version: Versions = defaultVersion, code: string): ReturnType<typeof Parser["parse"]> {
		return Parser.parse(code);
	}

	export function explain(version: Versions = defaultVersion, code: string): ReturnType<ReturnType<typeof Parser["parse"]>["explain"]> {
		return parse(version, code).explain();
	}

	export function explainHTML(version: Versions = defaultVersion, code: string): ReturnType<ReturnType<typeof Parser["parse"]>["explainHTML"]> {
		return parse(version, code).explainHTML();
	}

	export async function render(version: Versions = defaultVersion, code: string): Promise<ReturnType<ReturnType<typeof Parser["parse"]>["render"]>> {
		return parse(version, code).render(await getRenderer(version));
	}

	export function translate(version: Versions = defaultVersion, language: LocaleLang, code: string): ReturnType<ReturnType<typeof Parser["parse"]>["translate"]> {
		return parse(version, code).translate(language);
	}

	export function replaceExplain(version: Versions = defaultVersion, code: string, ...selectors: string[]): void {
		return getElements(...selectors)
			.forEach(element => {
				const explanation = document.createElement("samp");
				explanation.innerHTML = parse(version, code).explain();
				element.parentElement?.insertBefore(explanation, element!.nextElementSibling);
			});
	}

	export function replaceExplainHTML(version: Versions = defaultVersion, code: string, ...selectors: string[]): void {
		return getElements(...selectors)
			.forEach(element => element.parentElement
				?.insertBefore(
					parse(version, code).explainHTML(),
					element!.nextElementSibling));
	}

	export async function replaceRender(version: Versions = defaultVersion, ...selectors: string[]): Promise<void> {
		const renderer = await getRenderer(version);
		return getElements(...selectors)
			.forEach(async element => element.parentElement
				?.insertBefore(
					parse(version, element.textContent || "").render(renderer),
					element!.nextElementSibling));
	}

	export async function replaceTranslate(version: Versions = defaultVersion, language: LocaleLang, ...selectors: string[]): Promise<void> {
		const renderer = await getRenderer(version);
		return getElements(...selectors)
			.forEach(element => element.parentElement
				?.insertBefore(
					parse(version, element.textContent || "").translate(language).render(renderer),
					element!.nextElementSibling));
	}

	async function getRenderer(version: Versions): Promise<Renderer> {
		return (await import(`./sources/${version}/Renderer`)).Renderer as Renderer;
	}

	function getElements(...selectors: string[]): Element[] {
		const defaultSelector = ["pre.blocks", "pre.scratchblocks"];
		return (selectors || defaultSelector)
			.map(selector => document.querySelector(selector))
			.filter((element): element is Element => !!element);
	}

}
