import { eslint } from '@aephonics/config';

const ignores = [
    '',
];

const globals = [
    '',
];

const overrides = [
    {
        files: ['**/*.mjs'],
        languageOptions: { globals: Object.fromEntries(globals.map(e => [e, true])) },
        rules: {},
    },
];

eslint.push(...overrides);
eslint.forEach(e => (e.ignores = ignores));

export default eslint;
