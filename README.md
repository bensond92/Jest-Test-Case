# Jest Test Case

>>package.json
```bash
{
  "name": "Jest-Test-Case",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "keywords": [],
  "author": "Benson",
  "license": "ISC",
  "devDependencies": {
    "jest": "^24.8.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/bensond92/JestBasics.git"
  }
}

```
How to run Test Case
> npm run test

## Passed Case
>test('Basic Arthmetic Calculation ' , () => {
    expect(newFunction.substract(10,5)).toBe(5);
});

```bash
> jest

 PASS  ./newFunction.test.js
  √ Basic Arthmetic Calculation  (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        3.098s
Ran all test suites.
```


## Failed Test Case
>test('Basic Arthmetic Calculation ' , () => {
    expect(newFunction.substract(10,4)).toBe(5);
});

```bash
> jest

 FAIL  ./newFunction.test.js
  × Basic Arthmetic Calculation  (10ms)

  ● Basic Arthmetic Calculation

    expect(received).toBe(expected) // Object.is equality

    Expected: 5
    Received: 6

      2 |
      3 | test('Basic Arthmetic Calculation ' , () => {
    > 4 |     expect(newFunction.substract(10,4)).toBe(5);
        |                                         ^
      5 | });
      6 |

      at Object.toBe (newFunction.test.js:4:41)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        3.64s
Ran all test suites.
```
