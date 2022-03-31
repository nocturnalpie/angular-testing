# Mocking and Spying

When the class you want to test depends on a service you will likely need to mock it out so that you aren't testing any additional functionality outside of the unit.

There are two main ways of doing this: mocks and spies. They are fairly similar and have some overlapping uses but these are they key differences.

Mocks:
- These are similar to the mocks we use in C# so even though they are also called spies in jasmine (`jasmine.createSpyObj`) we will be referring to them as mocks
- Have to be setup before the test and provided in the TestBed
- Mainly used for mocking a class for the whole test suite
- Have a look at some typical uses in [these tests](user.component.mock.spec.ts)

Spies:
- Can be setup anywhere in the test
- Mainly used when you only need them in a handful of tests and not the whole file
- Have a look at some typical uses in [these tests](user.component.spy.spec.ts)

You can also spy on getters/setters by using `spyOnProperty`. More information about that [here](https://jasmine.github.io/tutorials/spying_on_properties) if you need it.