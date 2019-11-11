
module.exports = {
  matchUntranslated(content) {
    const res = ('' + content.toLowerCase()).match(/.*(?<trans>translation[.a-zA-Z0-9]+).*/);

    let result = '';
    if (res) {
      result = res[1];
    }
    return result;
  },
};