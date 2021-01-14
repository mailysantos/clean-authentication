module.exports = {
  coverageDirectory: 'coverage',
  coverageProvider: 'babel', // v8
  testEnvironment: 'node',
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/main/**'],
  preset: '@shelf/jest-mongodb'
}
