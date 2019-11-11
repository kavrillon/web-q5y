const fileMethods = require('./test/utils/file');
const focommonrc = fileMethods.getRCConf('./.focommonrc');

module.exports = {
  preset: 'jest-puppeteer',
  rootDir: '.',
  testMatch: ['<rootDir>/test/e2e/*.spec.js'],
  testURL: `${focommonrc.url}:${focommonrc.port}`,
  haste: {
    providesModuleNodeModules: ['@kavrillon/frontend-common'],
  },
  testPathIgnorePatterns: [],
};
