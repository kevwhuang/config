const rules = {
    'adjacent-overload-signatures': 2,
    'array-type': 2,
    'await-thenable': 2,
    'ban-ts-comment': 2,
    'ban-tslint-comment': 2,
    'class-literal-property-style': 2,
    'class-methods-use-this': 2,
    'consistent-generic-constructors': 2,
    'consistent-indexed-object-style': 2,
    'consistent-return': 2,
    'consistent-type-assertions': 2,
    'consistent-type-definitions': 0,
    'consistent-type-exports': 2,
    'consistent-type-imports': 2,
    'default-param-last': 2,
    'dot-notation': 2,
    'explicit-function-return-type': 0,
    'explicit-member-accessibility': 0,
    'explicit-module-boundary-types': 2,
    'init-declarations': 2,
    'max-params': [2, { max: 5 }],
    'member-ordering': 2,
    'method-signature-style': 2,
    'naming-convention': [2, { format: ['UPPER_CASE', 'strictCamelCase'], selector: 'variable' }],
    'no-array-constructor': 2,
    'no-array-delete': 2,
    'no-base-to-string': 2,
    'no-confusing-non-null-assertion': 2,
    'no-confusing-void-expression': [2, { ignoreArrowShorthand: true }],
    'no-deprecated': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-enum-values': 2,
    'no-duplicate-type-constituents': 2,
    'no-dynamic-delete': 2,
    'no-empty-function': 2,
    'no-empty-object-type': 2,
    'no-explicit-any': 0,
    'no-extra-non-null-assertion': 2,
    'no-extraneous-class': 2,
    'no-floating-promises': 2,
    'no-for-in-array': 2,
    'no-implied-eval': 2,
    'no-import-type-side-effects': 2,
    'no-inferrable-types': 2,
    'no-invalid-this': 2,
    'no-invalid-void-type': 2,
    'no-loop-func': 2,
    'no-magic-numbers': 0,
    'no-meaningless-void-operator': 2,
    'no-misused-new': 2,
    'no-misused-promises': 2,
    'no-misused-spread': 2,
    'no-mixed-enums': 2,
    'no-namespace': 2,
    'no-non-null-asserted-nullish-coalescing': 2,
    'no-non-null-asserted-optional-chain': 2,
    'no-non-null-assertion': 0,
    'no-redeclare': 2,
    'no-redundant-type-constituents': 2,
    'no-require-imports': 2,
    'no-restricted-imports': 2,
    'no-restricted-types': 2,
    'no-shadow': 2,
    'no-this-alias': 2,
    'no-unnecessary-boolean-literal-compare': 2,
    'no-unnecessary-condition': 2,
    'no-unnecessary-parameter-property-assignment': 0,
    'no-unnecessary-qualifier': 2,
    'no-unnecessary-template-expression': 2,
    'no-unnecessary-type-arguments': 2,
    'no-unnecessary-type-assertion': 2,
    'no-unnecessary-type-constraint': 2,
    'no-unnecessary-type-parameters': 2,
    'no-unsafe-argument': 0,
    'no-unsafe-assignment': 0,
    'no-unsafe-call': 0,
    'no-unsafe-declaration-merging': 2,
    'no-unsafe-enum-comparison': 2,
    'no-unsafe-function-type': 2,
    'no-unsafe-member-access': 0,
    'no-unsafe-return': 0,
    'no-unsafe-type-assertion': 0,
    'no-unsafe-unary-minus': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': 2,
    'no-use-before-define': [2, { functions: false }],
    'no-useless-constructor': 2,
    'no-useless-empty-export': 2,
    'no-wrapper-object-types': 2,
    'non-nullable-type-assertion-style': 2,
    'only-throw-error': 2,
    'parameter-properties': 2,
    'prefer-as-const': 2,
    'prefer-destructuring': [2, { array: false }],
    'prefer-enum-initializers': 2,
    'prefer-find': 2,
    'prefer-for-of': 2,
    'prefer-function-type': 2,
    'prefer-includes': 2,
    'prefer-literal-enum-member': 2,
    'prefer-namespace-keyword': 2,
    'prefer-nullish-coalescing': 2,
    'prefer-optional-chain': 2,
    'prefer-promise-reject-errors': 2,
    'prefer-readonly': 2,
    'prefer-readonly-parameter-types': 0,
    'prefer-reduce-type-parameter': 2,
    'prefer-regexp-exec': 2,
    'prefer-return-this-type': 2,
    'prefer-string-starts-ends-with': 2,
    'promise-function-async': 2,
    'related-getter-setter-pairs': 2,
    'require-array-sort-compare': 2,
    'require-await': 2,
    'restrict-plus-operands': 2,
    'restrict-template-expressions': 2,
    'return-await': 2,
    'strict-boolean-expressions': 0,
    'switch-exhaustiveness-check': 2,
    'triple-slash-reference': 2,
    'typedef': 2,
    'unbound-method': 2,
    'unified-signatures': 2,
    'use-unknown-in-catch-callback-variable': 2,
};

export default Object.fromEntries(Object.entries(rules).map(e => [`tslint/${e[0]}`, e[1]]));
