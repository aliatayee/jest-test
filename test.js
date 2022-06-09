function stringLength(string) {
    return string.length;
}

function reverseString(string) {
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

function capitalize(string){
    var firstLetter = string.charAt(0).toUpperCase();
    var slice = string.slice(1);
    return firstLetter+slice;
}
class calculator {
    constructor(result) {
        this.result = result;
    }

    add(a, b) {
        return this.result = a + b;
    }
    subtract(a, b) {
        return this.result = a - b;
    }
    divide(a, b) {
        return this.result = a / b;
    }
    multiply(a, b) {
        return this.result = a * b;
    }
}

const calc = new calculator;

describe('strings functionality', () => {
    test('string length between 1 and 10', () => {
        expect(stringLength('hello')).toBeGreaterThanOrEqual(1);
        expect(stringLength('hello')).toBeLessThanOrEqual(10);

    });

    test('string should be reversed', () => {
        expect(reverseString('ali')).toBe('ila');
    });
});

describe('calculator', () => {
    describe('add method', () => {
        test('is the instance of class', () => {
            expect(calc).toBeInstanceOf(calculator);
        });
        test('is the values positive integer', () => {
            expect(calc.add(2, 3)).toBeGreaterThan(0);
        });
        test('is the functionalities working fine', () => {
            expect(calc.add(2, 3)).toBe(5);
        });
    });
    describe('subtrac method', () => {
        test('is the instance of class', () => {
            expect(calc).toBeInstanceOf(calculator);
        });
        test('is the values positive integer', () => {
            expect(calc.subtract(6, 3)).toBeGreaterThan(0);
        });
        test('is the functionalities working fine', () => {
            expect(calc.subtract(6, 3)).toBe(3);
        });
    });
    describe('divide method', () => {
        test('is the instance of class', () => {
            expect(calc).toBeInstanceOf(calculator);
        });
        test('is the values positive integer', () => {
            expect(calc.divide(8, 4)).toBeGreaterThan(0);
        });
        test('is the functionalities working fine', () => {
            expect(calc.divide(8, 4)).toBe(2);
        });
    });
    describe('multiply method', () => {
        test('is the instance of class', () => {
            expect(calc).toBeInstanceOf(calculator);
        });
        test('is the values positive integer', () => {
            expect(calc.multiply(2, 3)).toBeGreaterThan(0);
        });
        test('is the functionalities working fine', () => {
            expect(calc.multiply(2, 3)).toBe(6);
        });
    });

});

test('is the argument passed string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

