module.exports = function (value /*, ignoreSpecialCharacters */) {
  if (value === null || value === undefined) return false;

  var valueIsString = (typeof value === 'string');
  var ignoreSpecialCharacters = (arguments[1] === undefined);
  value = (valueIsString && ignoreSpecialCharacters)
    ? value.toLowerCase().replace(/[^\w]/gi, '')
    : value.toString();

  function test(candidate) {
    if (candidate.length < 2) return true;

    var size = candidate.length - 1;
    var first = candidate[0];
    var last = candidate[size];
    var remaining = candidate.slice(1, size);
    return (first === last)
      ? test(remaining)
      : false;
  }
  return test(value);
}
