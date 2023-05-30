export default {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/**/*(*.)@(test).[tj]s?(x)'],
  testPathIgnorePatterns: [
    '/node_modules/', // default
  ],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
