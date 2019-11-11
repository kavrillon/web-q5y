const fs = require('fs');

module.exports = {
  getRCConf(path) {
    return JSON.parse(fs.readFileSync(path, 'utf8'));
  }
}