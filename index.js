module.exports = function (value /*, ignoreSpecialCharacters */) {
  if (value === 0 || value === '') return true;

  if (!value || value === true) return false;

  var valueIsString = (typeof value === 'string');
  var ignoreSpecialCharacters = (arguments[1] === undefined);
  value = (valueIsString && ignoreSpecialCharacters)
    ? value.toLowerCase().replace(/[^\w]/gi, '')
    : value.toString();
  return value === value.split('').reverse().join('');
}
