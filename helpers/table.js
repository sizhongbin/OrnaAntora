'use strict'

module.exports = {
  tableC: (text) => {
    const updatedText = text.replace(/<colgroup>.*?<\/colgroup>/gi, '');
    return updatedText;
  }
};