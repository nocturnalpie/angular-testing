# Async Tests
All asynchronous calls in your tests should be surrounded by `waitForAsync` or `fakeAsync` to make sure that all asynchronous code and asserts are called.

Most of the time you will only need to use `waitForAsync` but if you have code that has timers or waits in then you can use `fakeAsync` to artificially move the clock forward during your tests so that you don't actually have to wait until the timer completes. To use it just call `tick(NUMBER OF SECONDS)` and the test will skip those seconds.

Have a look at the [async service](async.service.ts) and it's [tests](async.service.spec.ts) to see this in action.

## The old ways

The following are some old ways of achieving the same thing, you may see examples of the these on stack overflow. You should replace these with `waitForAsync` instead.

### Done

Jasmine has a built in done function that you can call when you know the test is finished. It looks like this:

```typescript
it('should ...', (done) => {
	service.doSomething().then(() => 
		done();
	);
});
```
To replace it with waitForAsync just remove the call to done and the done parameter and add waitForAsync as normal.

### Async
`waitForAsync` used to be called `async` in Angular v10 and earlier so if you see this you can just replace it with `waitForAsync`.