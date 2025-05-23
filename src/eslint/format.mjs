const rules = {
    'array-bracket-newline': [2, 'consistent'],
    'array-bracket-spacing': 2,
    'array-element-newline': [2, 'consistent'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': 2,
    'block-spacing': 2,
    'brace-style': 2,
    'comma-dangle': [2, 'always-multiline'],
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'curly-newline': 2,
    'dot-location': [2, 'property'],
    'eol-last': 2,
    'func-call-spacing': 2,
    'function-call-argument-newline': [2, 'consistent'],
    'function-call-spacing': 2,
    'function-paren-newline': [2, 'consistent'],
    'generator-star-spacing': [2, { after: true, before: false }],
    'implicit-arrow-linebreak': 2,
    'indent': 2,
    'indent-binary-ops': [2, 4],
    'jsx-child-element-spacing': 2,
    'jsx-closing-bracket-location': 2,
    'jsx-closing-tag-location': [2, 'line-aligned'],
    'jsx-curly-brace-presence': [2, { propElementValues: 'always' }],
    'jsx-curly-newline': [2, { multiline: 'require', singleline: 'forbid' }],
    'jsx-curly-spacing': 2,
    'jsx-equals-spacing': 2,
    'jsx-first-prop-new-line': 2,
    'jsx-function-call-newline': 2,
    'jsx-indent-props': 2,
    'jsx-max-props-per-line': [2, { when: 'multiline' }],
    'jsx-newline': [2, { allowMultilines: true, prevent: true }],
    'jsx-one-expression-per-line': [2, { allow: 'non-jsx' }],
    'jsx-pascal-case': [2, { allowAllCaps: true }],
    'jsx-props-no-multi-spaces': 2,
    'jsx-quotes': 2,
    'jsx-self-closing-comp': 0,
    'jsx-sort-props': [2, { callbacksLast: true, reservedFirst: true }],
    'jsx-tag-spacing': [2, { beforeClosing: 'never' }],
    'jsx-wrap-multilines': [2, { declaration: 'parens-new-line', return: 'parens-new-line' }],
    'key-spacing': 2,
    'keyword-spacing': 2,
    'line-comment-position': 2,
    'linebreak-style': 2,
    'lines-around-comment': [2, { afterBlockComment: true }],
    'lines-between-class-members': 2,
    'max-len': [2, { code: 100 }],
    'max-statements-per-line': 2,
    'member-delimiter-style': 2,
    'multiline-comment-style': 2,
    'multiline-ternary': [2, 'never', { ignoreJSX: true }],
    'new-parens': [2, 'never'],
    'newline-per-chained-call': [2, { ignoreChainWithDepth: 3 }],
    'no-confusing-arrow': 2,
    'no-extra-parens': [2, 'functions'],
    'no-extra-semi': 2,
    'no-floating-decimal': 2,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-tabs': 2,
    'no-trailing-spaces': 2,
    'no-whitespace-before-property': 2,
    'nonblock-statement-body-position': 2,
    'object-curly-newline': 2,
    'object-curly-spacing': [2, 'always'],
    'object-property-newline': [2, { allowAllPropertiesOnSameLine: true }],
    'one-var-declaration-per-line': 2,
    'operator-linebreak': 2,
    'padded-blocks': [2, 'never'],
    'padding-line-between-statements': 2,
    'quote-props': [2, 'consistent-as-needed'],
    'quotes': [2, 'single'],
    'rest-spread-spacing': 2,
    'semi': 2,
    'semi-spacing': 2,
    'semi-style': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, { named: 'never' }],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': 2,
    'spaced-comment': 2,
    'switch-colon-spacing': 2,
    'template-curly-spacing': 2,
    'template-tag-spacing': 2,
    'type-annotation-spacing': 2,
    'type-generic-spacing': 2,
    'type-named-tuple-spacing': 2,
    'wrap-iife': 2,
    'wrap-regex': 2,
    'yield-star-spacing': 2,
};

export default Object.fromEntries(Object.entries(rules).map(e => [`stylistic/${e[0]}`, e[1]]));
