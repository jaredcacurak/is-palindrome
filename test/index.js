var should = require('chai').should(),
    isPalindrome = require('../index');

describe('#isPalindrome', function () {
    it('jared', function () {
        isPalindrome('jared').should.be.false;
    });

    it('an empty string', function () {
        isPalindrome('').should.be.true;
    });

    it('a single character', function () {
        isPalindrome('a').should.be.true;
    });

    it('two characters', function () {
        isPalindrome('aa').should.be.true;
    });

    it('racecar', function () {
        isPalindrome('racecar').should.be.true;
    });

    it('Amore Roma', function () {
        isPalindrome('Amore Roma').should.be.true;
    });

    it('A man, a plan, a canal: Panama', function () {
        isPalindrome('A man, a plan, a canal: Panama').should.be.true;
    });

    it("No 'x' in 'Nixon'", function () {
        isPalindrome("No 'x' in 'Nixon'").should.be.true;
    });

    it('42', function () {
        isPalindrome(42).should.be.false;
    });

    it('1', function () {
        isPalindrome(1).should.be.true;
    });

    it('11', function () {
        isPalindrome(11).should.be.true;
    });

    it('121', function () {
        isPalindrome(121).should.be.true;
    });

    it('0', function () {
        isPalindrome(0).should.be.true;
    });

    it('null', function () {
        isPalindrome(null).should.be.false;
    });

    it('undefined', function () {
        isPalindrome(undefined).should.be.false;
    });

    it('-1', function () {
        isPalindrome(-1).should.be.false;
    });

    it('!@#$', function () {
        isPalindrome('!@#$', false).should.be.false;
    });

    it('!@#$#@!', function () {
        isPalindrome('!@#$#@!', false).should.be.true;
    });
});