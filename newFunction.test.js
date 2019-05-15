const newFunction = require('./newFunction');

test('Basic Arthmetic Calculation ' , () => {
    expect(newFunction.substract(10,5)).toBe(5);
});
