export interface Explainable {
	explain(indentLevel: number): string;
	explainHTML(): HTMLDetailsElement;
}
