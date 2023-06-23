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
## Further Resources
- [Assert Documentation](https://nodejs.org/api/assert.html)
- [Mocha Documentation ](https://mochajs.org)
- [Introducing BDD](https://dannorth.net/introducing-bdd/)
## Conclusion
We can now write descriptive and well organised unit tests, which will help us to determine whether or not our code is working. Providing that we write good tests they can even ensure that we write better code.
Once our unit tests are in place we can safely refactor without having to worry about breaking anything. If our tests still pass then we know that our code is still working.
Our code will be better and more maintainable as a result of unit testing.

dannorth.netdannorth.net
Introducing BDD
I had a problem. While using and teaching agile practices like test-driven development (TDD) on projects in different environments, I kept coming across the same confusion and misunderstandings. Programmers wanted to know where to start, what to test and what not to test, how much to test in one go, what to call their tests, and how to understand why a test fails.
The deeper I got into TDD, the more I felt that my own journey had been less of a wax-on, wax-off process of gradual mastery than a series of blind alleys. I remember thinking “If only someone had told me that!” far more often than I thought “Wow, a door has opened.” I decided it must be possible to present TDD in a way that gets straight to the good stuff and avoids all the pitfalls.










# Choose Your Own Adventure

## 1 - I'd like to practice JS fundamentals

Start here - [TDD Painter / Decorator](./01_hw_tdd_painter_decorator/hw_tdd_painter_decorater.md)

*Move to 2 brave warrior if thout have the fortitude*

## 2 - I'm still trying to get confident with enumeration (map / filter / reduce etc)

Start here - [Traveller](./02_hw_traveller/hw_traveller_brief.md)

*Move to 3 most courageous soul (if thout must) - be warned - there be dragons ahead*

## 3 - I want a challenge

Start here - [Advanced Enumeration](./03_hw_advanced/hw_enumeration_brief.md)

## Game Over
