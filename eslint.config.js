import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import stylisticJs from '@stylistic/eslint-plugin-js'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
	{
		// Define o ambiente do projeto
		languageOptions: {
			parser: typescriptParser,
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2021,
			},
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module',
			},
		},
		files: ['**/*.ts'],
		plugins: {
			'@typescript-eslint': typescriptEslint,
			prettier: prettierPlugin,
			'@stylistic/js': stylisticJs,
		},
		rules: {
			...typescriptEslint.configs.recommended.rules,
			...prettierConfig.rules,
			'prettier/prettier': ['error'],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'no-console': 'warn',
			'no-debugger': 'error',
		},
	},
]

