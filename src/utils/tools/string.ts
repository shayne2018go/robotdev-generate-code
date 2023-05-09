export const string = {
  // 首字母大写
  firstWordUpperCase: (str = '') => {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  },

  // 首字母小写
  firstWordLowerCase: (str = '') => {
    return str.substring(0, 1).toLowerCase() + str.substring(1);
  },
  // 线转换大驼峰
  lineToHumpBig: (str = '', line = '-') => {
    const reg = new RegExp(line + '(\\w)', 'gim');
    return string.firstWordUpperCase(
      str.replace(reg, function (all, letter, a) {
        return letter.toUpperCase();
      })
    );
  },
  // 线转换驼峰
  lineToHump: (str = '', line = '-') => {
    const reg = new RegExp(line + '(\\w)', 'gim');
    return str.replace(reg, function (all, letter, a) {
      return letter.toUpperCase();
    });
  },
  // 驼峰转换线
  humpToLine: (str = '', line = '-') => {
    const reg = new RegExp('^' + line, 'gim');
    return str
      .replace(/([A-Z])/g, line + '$1')
      .toLowerCase()
      .replace(reg, '');
  },
};
