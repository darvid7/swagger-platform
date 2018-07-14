# swagger-platform Testing Readme

This projects uses [`Jest`](https://jestjs.io/) (a popular open source testing library for JavaScript maintained by Facebook) to test things. `Jest` provides powerful mocks, works with Typescript and is particularly good at testing react code making it an obvious choice for this project.

Note: When running `yarn test` any file of the format `*.test.js` (suffix can also be `.ts`, `.jsx`, `.tsx`) gets run, so tests do not need to be in a particular directory.

For convention all tests will reside under `./test/`.



## Jest TLDR

```javascript
// import functionToTest() 

test('test description here', () => {
  expect(functionToTest(argA, argB, argC)).toBe(shouldReturnThis);
});

```

issues with Jest testing and interfaces 
https://github.com/kulshekhar/ts-jest/issues/378


## Backend tests


## Frontend tests
Jest & react

Capture snapshots of React trees or other serializable values to simplify testing and to analyze how state changes over time.

TODO: How we test react components