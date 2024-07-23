module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
  ],
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
    '^@images/(.*)$': '<rootDir>/src/assets/images/$1',
    '\\.png$': '<rootDir>/__mocks__/fileMock.js',
  },
}
