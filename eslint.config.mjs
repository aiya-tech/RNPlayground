import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import {fixupConfigRules} from '@eslint/compat'

export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}}},
  {languageOptions: {globals: globals.browser}},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    rules: {
      quotes: ['error', 'single'], // 强制单引号
      'object-curly-spacing': [2, 'never'], // 大括号内不允许不必要的空格
      'array-bracket-spacing': [2, 'never'], // [ 之前和 ] 之后不能带空格
      'no-console': [2, {allow: ['warn', 'error', 'info']}], // 禁止使用console.log, 允许warn, error, info
      'eol-last': 2, // 文件末尾强制换行
      'no-multiple-empty-lines': [2, {max: 1}], // 空行最多不能超过1行
      'spaced-comment': 2, // 注释风格
      'prefer-const': 0, // 首选const
      indent: ['error', 2], // 缩进风格
      semi: ['error', 'never'], // 不带分号
      '@typescript-eslint/semi': ['error', 'never'],
      'no-multi-spaces': 2, // 不能用多余的空格
      'no-trailing-spaces': 2, // 一行结束后面不要有空格
      'comma-dangle': [2, 'always-multiline'], // 多行模式必须带逗号，单行模式不能带逗号
      'no-unused-vars': [0, {vars: 'all', args: 'none'}], // 不检查
      'padded-blocks': 0, // 块语句内行首行尾是否要空行
      'block-spacing': ['error', 'never'], // 禁止使用空格 规则在打开的块令牌内和同一行上的下一个令牌内强制执行一致的间距。
      'operator-linebreak': [0, 'after'],
      'no-undef': 0,
      // 指定了 @typescript-eslint/member-delimiter-style 规则，
      // 用于配置 TypeScript 类型中分隔符的样式。
      // 在多行类型定义中，我们设置 delimiter 为 "none" 来禁用分号，
      // 在单行类型定义中，我们将 delimiter 设置为 "semi"，以在结尾添加分号。
      '@typescript-eslint/member-delimiter-style': ['error', {
        multiline: {
          delimiter: 'none',
          requireLast: false,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      }],
      '@typescript-eslint/no-explicit-any': 'off', // 允许使用any
      // '@typescript-eslint/no-unused-vars': ['warn', {'argsIgnorePattern': '^_'}],
      '@typescript-eslint/no-unused-vars': 'off', // 忽略未使用的变量
      '@typescript-eslint/ban-types': 'off',
    },
  },
]
