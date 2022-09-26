/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv:['<rootDir>/jest.setup.ts'],
  // globalSetup: '<rootDir>/__configTests__/setup.ts',
  // globalTeardown: '<rootDir>/__configTests__/teardown.ts',
  testMatch: ['**/__tests__/**/*.test.ts'],

};