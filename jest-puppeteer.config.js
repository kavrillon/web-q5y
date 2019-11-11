const DEBUG_MODE = process.argv.includes('--debug');
const fileMethods = require('./test/utils/file');
const config = fileMethods.getRCConf('./.q5yrc');

let puppeteer = {
  launch: DEBUG_MODE
    ? {
        headless: true,
        slowMo: 100
      }
    : {}
};

if (config.command && config.command.length > 0) {
  puppeteer.server = {
    command: config.command,
    port: config.port,
    launchTimeout: 120000,
    debug: DEBUG_MODE
  };
}

module.exports = puppeteer;
