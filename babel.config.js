module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '~': './src',
          '@images': './src/assets/images',
        },
      },
    ],
    // [
    //   'transform-remove-console',
    //   {'exclude': ['error', 'warn']},
    // ],
  ],
  overrides: [{
    plugins: [
      ['@babel/plugin-transform-private-methods', {loose: true}],
    ],
  }],
}
