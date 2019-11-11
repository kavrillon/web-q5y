const DEBUG_MODE = process.argv.includes('--debug');
const fileMethods = require('./test/utils/file');
const config = fileMethods.getRCConf('./.q5yrc');

module.exports = {
  launch: DEBUG_MODE
    ? {
        headless: true,
        slowMo: 100
      }
    : {},
  server: {
    command: config.command,
    port: config.port,
    launchTimeout: 120000,
    debug: false
  }
};
