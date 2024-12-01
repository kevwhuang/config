import globals from 'globals';
import pluginHooks from 'eslint-plugin-react-hooks';
import stylistic from '@stylistic/eslint-plugin';
import tslint from 'typescript-eslint';

import base from './eslint/base.mjs';
import format from './eslint/format.mjs';
import hooks from './eslint/hooks.mjs';
import types from './eslint/types.mjs';

export default [{
    files: ['**/*.{js,jsx,mjs,ts,tsx}'],
    ignores: [],
    languageOptions: {
        ecmaVersion: 'latest',
        globals: {
            ...globals.browser,
            ...globals.node,
            Bun: true,
        },
        parser: tslint.parser,
        parserOptions: {
            projectService: true,
            tsconfigRootDir: import.meta.dirname,
        },
        sourceType: 'module',
    },
    linterOptions: {
        noInlineConfig: true,
        reportUnusedDisableDirectives: true,
    },
    plugins: {
        '@hooks': pluginHooks,
        '@stylistic': stylistic,
        '@tslint': tslint.plugin,
    },
    rules: {
        ...base,
        ...format,
        ...types,
        ...hooks,
    },
}];