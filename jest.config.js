module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
      }
    ]
  },
  moduleNameMapper: {
    '^n8n-workflow$': '<rootDir>/node_modules/n8n-workflow/dist'
  },
  haste: {
    throwOnModuleCollision: false
  }
};