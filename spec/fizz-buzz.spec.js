require('../spec.helper');

let fizzBuzz = new FizzBuzz

describe('Fizz Buzz', () => {
    fizzBuzz
});

    it('returns a number if no gamerules are met', () => {
        expect(fizzBuzz.check(1)).to.eql(1)
    });

    it('returns Fizz if number is divisible by 3', () => {
        expect(fizzBuzz.check(3)).to.eql('Fizz')
    })

