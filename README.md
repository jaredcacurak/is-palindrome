Is-Palindrome
=============

A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction.

## Installation
```
npm install is-palindrome --save
```

## Usage
```
var isPalindrome = require('is-palindrome');

isPalindrome('racecar') === true;
isPalindrome(101) === true;
isPalindrome('!@#$#@!', false) === true;
```

## Tests
```
npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release