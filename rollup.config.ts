import * as packageJson from './package.json';
import { terser } from "rollup-plugin-terser";
import typescript from '@rollup/plugin-typescript';

/**
 * @type {Partial<import('rollup').Plugin[]>}
 */
const plugins = [
	terser(),
];

/**
 * @type {Partial<import('rollup').OutputOptions>}
 */
const defaultOutput = {
	sourcemap: true,
	compact: true,
	preferConst: true,
	sourcemapExcludeSources: true,
	validate: true,
	plugins,
};

/**
 * @type {import('rollup').RollupOptions[]}
 */
const config = [
	{
		// lambda aws
		input: `./src/lambda/aws/index.ts`,
		plugins: [
			typescript(),
		],
		output: {
			file: `dist/lambda/aws/index.js`,
			format: `esm`,
			...defaultOutput,
		},

	},
	{
		// lambda google_cloud
		input: `./src/lambda/google_cloud/index.ts`,
		plugins: [
			typescript(),
		],
		output: {
			file: `./dist/lambda/google_cloud/index.js`,
			format: `esm`,
			...defaultOutput,
		},
	},
	{
		// lib (node)
		input: `./src/lib/index.ts`,
		plugins: [
			typescript(),
		],
		output: {
			file: `./dist/lib/index.js`,
			format: `cjs`,
			...defaultOutput,
		},
	},
	{
		// web (browser)
		input: `./src/web/index.ts`,
		plugins: [
			typescript(),
		],
		output: {
			file: `./dist/web/index.js`,
			format: `iife`,
			name: packageJson.name,
			...defaultOutput,
		},
	},
];

export default config;
