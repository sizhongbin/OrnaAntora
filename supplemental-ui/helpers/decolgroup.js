'use strict'

const cheerio = require('cheerio');

module.exports = (contents) => {
  const contentsStr = contents.toString();
  const $ = cheerio.load(contentsStr);
  $('colgroup').remove();
  $('table').each((key, value) => {
    if (!$(value).parent('.table-container').length) {
      $(value).wrap('<div class="table-container"></div>');
    }
  });
  return $.html();
};