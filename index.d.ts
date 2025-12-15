import type { Config } from 'prettier';
import type { Linter } from 'eslint';

declare module 'eslint-plugin-react-hooks';

declare const eslint: Linter.Config[];
declare const prettier: Config;

export {
    eslint,
    prettier,
};
