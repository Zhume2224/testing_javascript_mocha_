## Further Resources
- [Assert Documentation](https://nodejs.org/api/assert.html)
- [Mocha Documentation ](https://mochajs.org)
- [Introducing BDD](https://dannorth.net/introducing-bdd/)


## Writing Tests with Assert Module Built in Node.
1. create a .js file to work in and get access to `assert` module.
    ```js
     //play.js
     const assert = require ('assert');
     assert.equal(true,false);
   ```
2. run test with node:
    ```js
    node play.js
   ```
    (we should get #-> AssertionError.

## Using Mocha To Organise and Run Tests.


Before we do, it's worth mentioning that Mocha supports a number of different syntaxes. The type we're going to use is _Behaviour Driven Development_, or BDD.
Tests written in a BDD style will follow the format "It should...", and they should tie in closely to the user stories that you or your UX colleagues should have written.

1.
The first thing that we'll need to do is create some files to work in. We're going to model a taxi, so we'll need a file for our `Taxi` model and corresponding spec file. We typically create a specs folder to keep our tests organised separately from our models and name our test files the same as our models with a \_spec suffix. For example, the test file for our taxi model will be called taxi_spec.js.
```sh
touch taxi.js
mkdir specs
touch specs/taxi_spec.js
```
    (We're going to be using Mocha to write and run our tests, so we have to install it using npm.
We'll use Mocha during development but our tests aren't necessary to actually run our application, so we'll save Mocha as a dev dependency.
If someone was to then clone our project with the intention of running it without modifying the code, they could use `npm install --production` to avoid installing our dev dependencies.)

2.
```sh
npm init
npm install --save-dev mocha
```

We can create npm scripts by adding a name to refer to them by and the command that we want to execute as a key-value pair to the `"scripts"` object in our package.json.
npm expects us to have a `"test"` script, so it provides one by default. We can then update it's value so that it runs our tests for us.
```js
// package.json
"scripts": {
  "test": "mocha specs" // MODIFIED
},
```
Now that we've added our npm script we can run it using `npm test` while we're at the same level as our package.json.
```sh
npm test
# -> 0 passing
```
3.
If we want to start writing tests then the first thing that we have to do is require Assert and the model that we want to test. We'll be testing our `Taxi` model.
```js
// taxi_spec.js
const assert = require('assert');
const Taxi = require('../taxi.js');
```
4.
### `describe()`

We'll call Mocha's `describe()` function and pass it two arguments:
1. The name of the model that we're testing as a `String`, in this case `'Taxi'`
2. A function which will contain all of the tests associated with the thing that we're describing. This syntax might look a little bit strange right now but we'll learn more about this very soon.
```js
describe('Taxi', function () {
});
```

### `it()`
Inside of the function that we're passing to `describe()` we can use the `it()` function for each of our test cases.
For the moment, we're just going to pass a single argument to `it()`: a `String` describing the test case.
We're going to add a manufacturer property to our `Taxi` so let's describe our test accordingly.
```js
describe('Taxi', function () {
  it('should have a manufacturer');
});
```

5.
Let's get started on writing the body of the test.
In order to write the body of the test, just as we did with `describe`, we have to pass a function as the second argument to `it()`.
```js
describe('Taxi', function () {
  it('should have a manufacturer', function () {
  });
  it('should have a model', function () {
  });
});
```
This _anonymous_ function will contain the setup for our test, and our `assert`.

6.
### Arrange-Act-Assert
As with many other testing frameworks we can use the arrange-act-assert pattern here.
1. Arrange: Perform any setup that might be required for the test
2. Act: Perform the action that we want to test
3. Assert: Check that our action had the expected result
```js
describe('Taxi', function () {
  it('should have a manufacturer', function () {
    const taxi = new Taxi('Toyota', 'Prius');      // Arrange
    const actual = taxi.manufacturer;              // Act
    assert.strictEqual(actual, 'Toyota');          // Assert
  });
  it('should have a model', function () {
    const taxi = new Taxi('Toyota', 'Prius');
    const actual = taxi.model;
    assert.strictEqual(actual, 'Prius');
  });
});
```
7.
We've written our test but it should fail because we haven't written the code to make it pass yet. We should always run our test at this point so that we can see it fail.
If you've never seen a test fail then you can't be sure that it's a good test, or that it tests anything at all.
```sh
npm test
# -> 1 failing
# -> TypeError: Taxi is not a constructor
```
Now we know exactly where to start. Let's create the constructor function for our `Taxi`, making sure not to forget our `module.exports`.
```js
// taxi.js
const Taxi = function (manufacturer) {
  this.manufacturer = manufacturer;
}
module.exports = Taxi;
```

8.
Now we should be able to run our test again and it should pass.
```sh
npm test
```

9.
### `beforeEach()`
So far, so good. There's some repetition in our test cases though. We're creating a new `Taxi` object in each test.
Mocha gives us some handy hooks which we can use to execute code at specific points during testing. In this case we want to create an object before each test, so we can use `beforeEach()`.

```js
let taxi;
beforeEach(function () {
  taxi = new Taxi('Toyota', 'Prius');
});
```
> We have to declare any variables outside of `beforeEach()` to prevent them from being scoped locally to that function.
We can now remove the `Taxi` objects that we created in each test and use the one that we're creating before each test using the `beforeEach()` hook.
```js
it('should have a manufacturer', function () {
  // const Taxi = new Taxi('Toyota', 'Prius'); REMOVED
  const actual = taxi.manufacturer;
  assert.strictEqual(actual, 'Toyota');
});
it('should have a model', function () {
  // const Taxi = new Taxi('Toyota', 'Prius'); REMOVED
  const actual = taxi.model;
  assert.strictEqual(actual, 'Prius');
});
```

## Conclusion
We can now write descriptive and well organised unit tests, which will help us to determine whether or not our code is working. Providing that we write good tests they can even ensure that we write better code.
Once our unit tests are in place we can safely refactor without having to worry about breaking anything. If our tests still pass then we know that our code is still working.
Our code will be better and more maintainable as a result of unit testing.

## Q&A
Which methods did we use from Node's Assert module?
<details>
<summary>Answers</summary>
`equal()`
`strictEqual()`
`deepEqual()`
`deepStrictEqual()`
</details>
<br>
What is the difference between `equal()` and `strictEqual()`?
<details>
<summary>Answer</summary>
`equal()` uses the abstract equality operator (`==`) while `strictEqual()` uses the strict equality operator (`===`).
</details>
<br>
What is the difference between `equal()` and `deepEqual()`?
<details>
<summary>Answer</summary>
When comparing objects `equal()` expects both arguments to be references to the exact same object, whereas `deepEqual()` will check if the contents of the objects are the same.
</details>
<br>
How can we set up an npm script to run our tests for us?
<details>
<summary>Answer</summary>
Add `mocha specs` to the test script in our package.json. This tells npm to run the files in our specs directory with mocha. We can then run this script using `npm test`.
</details>
<br>
Which Mocha function can we use to group similar tests?
<details>
<summary>Answer</summary>
`describe()`
</details>

