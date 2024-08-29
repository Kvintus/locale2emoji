import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default [
    { plugins: {
        '@stylistic': stylistic,
    } },

    stylistic.configs.customize({
    // the following options are the default values
        indent: 4,
        quotes: 'single',
        semi: false,
        jsx: true,
    // ...
    }),

    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
]
