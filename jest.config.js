const fileMethods = require('./test/utils/file');
const config = fileMethods.getRCConf('./.q5yrc');

module.exports = {
  preset: 'jest-puppeteer',
  rootDir: '.',
  testMatch: ['<rootDir>/test/e2e/*.spec.js'],
  testURL: `${config.url}:${config.port}`,
  haste: {
    providesModuleNodeModules: ['@kavrillon/web-q5y']
  },
  testPathIgnorePatterns: []
};
