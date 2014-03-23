module.exports = function (value /*, ignoreSpecialCharacters */) {
  if (value === 0 || value === '') return true;

  if (!value || value === true) return false;

  var valueIsString = (typeof value === 'string');
  var ignoreSpecialCharacters = (arguments[1] === undefined);
  value = (valueIsString && ignoreSpecialCharacters)
    ? value.toLowerCase().replace(/[^\w]/gi, '')
    : value.toString();
  var length = value.length;

  if (length < 2) return true;

  for (var i = Math.floor(length / 2); i >= 0; i -= 1) {
    if (value[i - 1] !== value[length - i]) return false;
  }
  return true;
}
