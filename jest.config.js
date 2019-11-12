const fileMethods = require('./test/utils/file');
const config = fileMethods.getRCConf('./.q5yrc');

module.exports = {
  preset: 'jest-puppeteer',
  rootDir: '.',
  testMatch: ['<rootDir>/test/e2e/seo.spec.js'],
  haste: {
    providesModuleNodeModules: ['@kavrillon/web-q5y']
  },
  testPathIgnorePatterns: []
};
