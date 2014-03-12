module.exports = function (value /*, ignoreSpecialCharacters */) {
    var ignoreSpecialCharacters = arguments[1];

    if (value == null) { return false; }

    ignoreSpecialCharacters = (ignoreSpecialCharacters != null)
            ? ignoreSpecialCharacters
            : true;
    value = (typeof value === 'string' && ignoreSpecialCharacters)
            ? value.toLowerCase().replace(/[^\w]/gi, '')
            : value.toString();

    function test(candidate) {

        if (candidate.length < 2) { return true; }

        var size = candidate.length - 1,
            first = candidate[0],
            last = candidate[size],
            remaining = candidate.slice(1, size);
        return (first === last)
                ? test(remaining)
                : false;
    }
    return test(value);
}
