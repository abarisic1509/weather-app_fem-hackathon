import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.config({
		extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
		rules: {
			eqeqeq: 'error',
			'newline-before-return': 'error',
			'no-bitwise': 'error',
			'no-console': ['warn', { allow: ['warn', 'error', 'info', 'debug'] }],
			'no-constant-binary-expression': 'error',
			'no-debugger': 'error',
			'no-extra-boolean-cast': 'off',
			'no-implicit-coercion': 'error',
			'no-lonely-if': 'error',
			'no-param-reassign': 'error',
			'no-unneeded-ternary': 'error',
			'no-sparse-arrays': 'off',
			'no-var': 'error',
			'no-void': 'error',
			'prefer-arrow-callback': 'error',
			'prefer-const': 'error',
			'require-await': 'error',
			'@typescript-eslint/method-signature-style': 'error',
			'@typescript-eslint/no-confusing-non-null-assertion': 'error',
			'@typescript-eslint/no-inferrable-types': 'error',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					vars: 'local',
					args: 'after-used',
					caughtErrors: 'none',
					varsIgnorePattern: '^_',
					argsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/no-useless-empty-export': 'error',
		},
	}),
	{
		ignores: ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
	},
];

export default eslintConfig;
