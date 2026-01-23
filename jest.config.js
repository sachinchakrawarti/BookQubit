module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/server', '<rootDir>/app'],
  testMatch: ['**/__tests__/**/*.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/build/**',
  ],
};