var should = require('chai').should(),
    isPalindrome = require('../index');

describe('#isPalindrome', function () {
    it('"jared" is not a palindrome', function () {
        isPalindrome('jared').should.be.false;
    });

    it('an empty string is a palindrome', function () {
        isPalindrome('').should.be.true;
    });

    it('a single character is a palindrome', function () {
        isPalindrome('a').should.be.true;
    });

    it('two identical characters are a palindrome', function () {
        isPalindrome('aa').should.be.true;
    });

    it('"racecar" is a palindrome', function () {
        isPalindrome('racecar').should.be.true;
    });

    it('"Amore Roma" is a palindrome', function () {
        isPalindrome('Amore Roma').should.be.true;
    });

    it('"A man, a plan, a canal: Panama" is a palindrome', function () {
        isPalindrome('A man, a plan, a canal: Panama').should.be.true;
    });

    it("\"No 'x' in 'Nixon'\" is a palindrome", function () {
        isPalindrome("No 'x' in 'Nixon'").should.be.true;
    });

    it('42 is not a palindrome', function () {
        isPalindrome(42).should.be.false;
    });

    it('1 is a palindrome', function () {
        isPalindrome(1).should.be.true;
    });

    it('11 is a palindrome', function () {
        isPalindrome(11).should.be.true;
    });

    it('121 is a palindrome', function () {
        isPalindrome(121).should.be.true;
    });

    it('0 is a palindrome', function () {
        isPalindrome(0).should.be.true;
    });

    it('null is not a palindrome', function () {
        isPalindrome(null).should.be.false;
    });

    it('undefined is not a palindrome', function () {
        isPalindrome(undefined).should.be.false;
    });

    it('-1 is not a palindrome', function () {
        isPalindrome(-1).should.be.false;
    });

    it('"!@#$" is not a palindrome', function () {
        isPalindrome('!@#$', false).should.be.false;
    });

    it('"!@#$#@!" is a palindrome', function () {
        isPalindrome('!@#$#@!', false).should.be.true;
    });
});
