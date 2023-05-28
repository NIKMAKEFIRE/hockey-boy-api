module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
    ],
    plugins: ['@typescript-eslint'],

    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },

    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-explicit-any': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        '@typescript-eslint/semi': ['error'],
        'object-curly-spacing': ['error', 'always'],
        'eol-last': ['error', 'always'],
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        'max-classes-per-file': 'error',
        'prefer-template': 'error',
        '@typescript-eslint/camelcase': 'off',
    },
};
